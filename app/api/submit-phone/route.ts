import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { questions } from '@/data/questions';

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, answers } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    if (!answers || typeof answers !== 'object') {
      return NextResponse.json(
        { error: 'Answers are required' },
        { status: 400 }
      );
    }

    // Initialize auth
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')!,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID!,
      serviceAccountAuth
    );

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // Prepare header row with question labels
    const headers = ['Phone Number', ...questions.map(q => q.question)];

    // Always ensure headers are set (this will overwrite if they exist)
    try {
      await sheet.loadHeaderRow();
      // If headers don't match, reset them
      if (sheet.headerValues.length === 0 || sheet.headerValues[0] !== 'Phone Number') {
        await sheet.setHeaderRow(headers);
      }
    } catch {
      // No headers exist, set them
      await sheet.setHeaderRow(headers);
    }

    // Prepare row data: phone number + answers in question order
    const rowData: Record<string, string> = {
      'Phone Number': phoneNumber,
    };

    // Add answers in the order of questions
    questions.forEach((question) => {
      const answerId = answers[question.id] || '';
      // Find the label for the answer ID
      const option = question.options.find(opt => opt.id === answerId);
      rowData[question.question] = option ? option.label : answerId || '';
    });

    // Add the row
    await sheet.addRow(rowData);

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error saving to Google Sheets:', error);
    return NextResponse.json(
      { 
        error: 'Failed to save data',
        details: process.env.NODE_ENV === 'development' ? error?.message : undefined
      },
      { status: 500 }
    );
  }
}

