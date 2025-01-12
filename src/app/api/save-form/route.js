import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import Contact from '../../../../models/Contact';

export async function POST(req) {
  await dbConnect();

  try {
    const formData = await req.json();
    console.log('Полученные данные:', JSON.stringify(formData, null, 2));

    const contact = new Contact(formData);
    await contact.save();

    return NextResponse.json({ success: true, message: 'Данные успешно сохранены!' });
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error);
    return NextResponse.json(
      { success: false, message: 'Ошибка при сохранении данных', error: error.message },
      { status: 500 }
    );
  }
}
