'use client';

import { useState } from 'react';

export default function ComplexForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    businessDescription: '',
    productsServices: '',
    contactPhone: '',
    contactEmail: '',
    contactAddress: '',
    telegram: '',
    instagram: '',
    vk: '',
    yandexZen: '',
    socialMediaWishes: '',
    websiteGoals: {
      salesIncrease: false,
      newClients: false,
      imageImprovement: false,
      information: false,
      otherGoals: '',
    },
    websiteStructure: {
      mainPage: false,
      aboutCompany: false,
      servicesProducts: false,
      portfolio: false,
      newsBlog: false,
      contacts: false,
      personalAccount: false,
      otherStructure: '',
    },
    additionalFunctions: {
      onlineApplications: false,
      chatbot: false,
      crmIntegration: false,
      siteSearch: false,
      otherFunctions: '',
    },
    designPreferences: {
      minimalism: false,
      corporate: false,
      creative: false,
      otherPreferences: '',
      needBrandbook: false,
      siteExamples: '',
    },
    content: {
      photos: false,
      videos: false,
      otherMaterials: '',
      createFromScratch: {
        photoshoot: false,
        otherCreationNeeds: '',
      },
    },
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
  
    setFormData((prev) => {
      const updated = { ...prev };
      let nested = updated;
  
      for (let i = 0; i < keys.length - 1; i++) {
        nested = nested[keys[i]];
      }
  
      nested[keys[keys.length - 1]] = value;
      return updated;
    });
  };
  

  const handleButtonClick = (fieldName) => {
    const keys = fieldName.split('.');
  
    setFormData((prev) => {
      // Глубокое клонирование состояния
      const updated = JSON.parse(JSON.stringify(prev));
      let nested = updated;
  
      for (let i = 0; i < keys.length - 1; i++) {
        if (!nested[keys[i]]) nested[keys[i]] = {}; // Инициализация объекта, если его нет
        nested = nested[keys[i]];
      }
  
      // Переключение значения
      nested[keys[keys.length - 1]] = !nested[keys[keys.length - 1]];
  
      console.log('Updated State:', updated);
      return updated;
    });
  };
  
  
  
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/save-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMessage('Форма успешно отправлена!');
        setFormData({
          companyName: '',
          businessDescription: '',
          productsServices: '',
          contactPhone: '',
          contactEmail: '',
          contactAddress: '',
          telegram: '',
          instagram: '',
          vk: '',
          yandexZen: '',
          socialMediaWishes: '',
          websiteGoals: {
            salesIncrease: false,
            newClients: false,
            imageImprovement: false,
            information: false,
            otherGoals: '',
          },
          websiteStructure: {
            mainPage: false,
            aboutCompany: false,
            servicesProducts: false,
            portfolio: false,
            newsBlog: false,
            contacts: false,
            personalAccount: false,
            otherStructure: '',
          },
          additionalFunctions: {
            onlineApplications: false,
            chatbot: false,
            crmIntegration: false,
            siteSearch: false,
            otherFunctions: '',
          },
          designPreferences: {
            minimalism: false,
            corporate: false,
            creative: false,
            otherPreferences: '',
            needBrandbook: false,
            siteExamples: '',
          },
          content: {
            photos: false,
            videos: false,
            otherMaterials: '',
            createFromScratch: {
              photoshoot: false,
              otherCreationNeeds: '',
            },
          },
        });
      } else {
        setResponseMessage(data.message || 'Ошибка при отправке данных.');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setResponseMessage('Ошибка отправки формы.');
    }
  };

  return (
    <div className="bg-[#1C201F] min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-[1100px] w-full p-6 bg-inherit">
        <div className="relative mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-400">
            Название компании
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Введите название компании"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border border-gray-500 shadow-sm focus:outline-none"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-400">
            Описание бизнеса
          </label>
          <input
            type="text"
            id="businessDescription"
            name="businessDescription"
            placeholder="Опишите деятельность компании"
            value={formData.businessDescription}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border border-gray-500 shadow-sm focus:outline-none"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="productsServices" className="block text-sm font-medium text-gray-400">
            Продукты и услуги
          </label>
          <input
            type="text"
            id="productsServices"
            name="productsServices"
            placeholder="Укажите продукты или услуги"
            value={formData.productsServices}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border border-gray-500 shadow-sm focus:outline-none"
          />
        </div>

        <h2 className="text-lg font-semibold mb-4 text-white">Контакты</h2>
        <div className="relative mb-4">
          <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-400">
            Телефон
          </label>
          <input
            type="text"
            id="contactPhone"
            name="contactPhone"
            placeholder="Введите телефон"
            value={formData.contactPhone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border border-gray-500 shadow-sm focus:outline-none"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            placeholder="Введите email"
            value={formData.contactEmail}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border border-gray-500 shadow-sm focus:outline-none"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="contactAddress" className="block text-sm font-medium text-gray-400">
            Адрес
          </label>
          <input
            type="text"
            id="contactAddress"
            name="contactAddress"
            placeholder="Введите адрес"
            value={formData.contactAddress}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border border-gray-500 shadow-sm focus:outline-none"
          />
        </div>
        <h2 className="text-lg font-semibold mb-6 text-white">Контакты которые будут указаны на сайте</h2>

        {/* Телефон */}
        <div className="relative mb-4">
          <input
            type="text"
            id="contactPhone"
            name="contactPhone"
            placeholder="+7 999 999 99 99"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            placeholder="apple@icloud.com"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
        </div>

        {/* Адрес */}
        <div className="relative mb-4">
          <input
            type="text"
            id="contactAddress"
            name="contactAddress"
            placeholder="Новоданиловская наб., 6, корп. 1"
            value={formData.contactAddress}
            onChange={handleChange}
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
        </div>

        {/* Telegram */}
        <div className="relative mb-4">
          <input
            type="text"
            id="telegram"
            name="telegram"
            placeholder="Укажите ссылку на ваш Telegram-аккаунт, если он у вас есть. Если вы хотите, чтобы мы создали новый Telegram-аккаунт, напишите об этом в поле"
            value={formData.telegram}
            onChange={handleChange}
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
        </div>

        {/* Instagram */}
        <div className="relative mb-4">
          <input
            type="text"
            id="instagram"
            name="instagram"
            placeholder="Укажите ссылку на ваш Instagram-аккаунт, если он у вас есть. Если вы хотите, чтобы мы создали новый Instagram-аккаунт, напишите об этом в поле"
            value={formData.instagram}
            onChange={handleChange}
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
        </div>

        {/* VK */}
        <div className="relative mb-4">
          <input
            type="text"
            id="vk"
            name="vk"
            placeholder="Укажите ссылку на ваш Vkontakte-аккаунт, если он у вас есть. Если вы хотите, чтобы мы создали новый Vkontakte-аккаунт, напишите об этом в поле"
            value={formData.vk}
            onChange={handleChange}
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
        </div>

        {/* Яндекс Дзен */}
        <div className="relative mb-4">
          <input
            type="text"
            id="yandexZen"
            name="yandexZen"
            placeholder="Укажите ссылку на ваш Яндекс Дзен-аккаунт, если он у вас есть. Если вы хотите, чтобы мы создали новый Яндекс Дзен-аккаунт, напишите об этом в поле"
            value={formData.yandexZen}
            onChange={handleChange}
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
        </div>

        {/* Социальные сети */}
        <div className="relative mb-4">
          <textarea
            id="socialMediaWishes"
            name="socialMediaWishes"
            placeholder="Опишите социальные сети в которых хотели бы создать бизнес аккаунт"
            value={formData.socialMediaWishes}
            onChange={handleChange}
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none resize-none h-20"
          ></textarea>
        </div>
        <h2 className="text-lg font-semibold mb-4 text-white">Цели сайта</h2>
        <p className="text-gray-400 mb-6">Какую основную задачу должен решать сайт? (можно выбрать несколько)</p>

        {/* Увеличение продаж */}
        <div className="relative flex items-center mb-4">
  <input
    type="text"
    value="Увеличение продаж"
    readOnly
    className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
  />
  <button
    type="button"
    onClick={() => handleButtonClick('websiteGoals.salesIncrease')}
    className={`ml-4 w-8 h-8 rounded-full ${
      formData.websiteGoals.salesIncrease ? 'bg-green-500' : 'bg-gray-500'
    } focus:outline-none`}
  ></button>
</div>

        {/* Привлечение новых клиентов */}
        <div className="relative flex items-center mb-4">
  <input
    type="text"
    value="Привлечение новых клиентов"
    readOnly
    className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
  />
  <button
    type="button"
    onClick={() => handleButtonClick('websiteGoals.newClients')}
    className={`ml-4 w-8 h-8 rounded-full ${
      formData.websiteGoals.newClients ? 'bg-green-500' : 'bg-gray-500'
    } focus:outline-none`}
  ></button>
</div>

        {/* Улучшение имиджа компании */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Улучшение имиджа компании"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('websiteGoals.imageImprovement')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.websiteGoals.imageImprovement ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Информирование */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Информирование"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('websiteGoals.information')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.websiteGoals.information ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


       {/* Другие задачи */}
<div className="relative flex items-center mb-4">
  <textarea
    id="otherGoals"
    name="websiteGoals.otherGoals" // Указываем вложенность
    placeholder="Другие задачи (указать)"
    value={formData.websiteGoals.otherGoals || ''} // Используем вложенное значение
    onChange={(e) =>
      setFormData((prev) => ({
        ...prev,
        websiteGoals: {
          ...prev.websiteGoals,
          otherGoals: e.target.value, // Обновляем вложенное значение
        },
      }))
    }
    className="w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none resize-none h-28"
  ></textarea>
</div>


        <h2 className="text-lg font-semibold mb-4 text-white">Структура сайта (можно выбрать несколько)</h2>
        <p className="text-gray-400 mb-6">Какие разделы вам нужны на сайте?</p>

        {/* Главная */}
        <div className="relative flex items-center mb-4">
  <input
    type="text"
    value="Главная"
    readOnly
    className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
  />
  <button
    type="button"
    onClick={() => handleButtonClick('websiteStructure.mainPage')}
    className={`ml-4 w-8 h-8 rounded-full ${
      formData.websiteStructure.mainPage ? 'bg-green-500' : 'bg-gray-500'
    } focus:outline-none`}
  ></button>
</div>

        {/* О компании */}
        <div className="relative flex items-center mb-4">
  <input
    type="text"
    value="О компании"
    readOnly
    className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
  />
  <button
    type="button"
    onClick={() => handleButtonClick('websiteStructure.aboutCompany')}
    className={`ml-4 w-8 h-8 rounded-full ${
      formData.websiteStructure.aboutCompany ? 'bg-green-500' : 'bg-gray-500'
    } focus:outline-none`}
  ></button>
</div>

        {/* Услуги/Продукты */}
        <div className="relative flex items-center mb-4">
        <input
          type="text"
          value="Услуги/Продукты"
          readOnly
          className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
        />
        <button
          type="button"
          onClick={() => handleButtonClick('websiteStructure.servicesProducts')}
          className={`ml-4 w-8 h-8 rounded-full ${
            formData.websiteStructure.servicesProducts ? 'bg-green-500' : 'bg-gray-500'
          } focus:outline-none`}
        ></button>
      </div>


        {/* Портфолио */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Портфолио"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('websiteStructure.portfolio')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.websiteStructure.portfolio ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Новости/Блог */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Новости/Блог"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('websiteStructure.newsBlog')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.websiteStructure.newsBlog ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Контакты */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Контакты"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('websiteStructure.contacts')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.websiteStructure.contacts ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Личный кабинет */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Личный кабинет (если требуется)"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('websiteStructure.personalAccount')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.websiteStructure.personalAccount ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Другие задачи */}
        <div className="relative mb-4">
          <textarea
            id="otherStructure"
            name="websiteStructure.otherStructure" // Указываем вложенность
            placeholder="Укажите другие задачи"
            value={formData.websiteStructure.otherStructure || ''} // Используем вложенное значение
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                websiteStructure: {
                  ...prev.websiteStructure,
                  otherStructure: e.target.value, // Обновляем вложенное значение
                },
              }))
            }
            className="w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none resize-none h-28"
          ></textarea>
        </div>

        <h2 className="text-lg font-semibold mb-4 text-white">Какие дополнительные функции вам нужны? (можно выбрать несколько)</h2>

{/* Онлайн-заявки */}
<div className="relative flex items-center mb-4">
  <input
    type="text"
    value="Онлайн-заявки"
    readOnly
    className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
  />
  <button
    type="button"
    onClick={() => handleButtonClick('additionalFunctions.onlineApplications')}
    className={`ml-4 w-8 h-8 rounded-full ${
      formData.additionalFunctions.onlineApplications ? 'bg-green-500' : 'bg-gray-500'
    } focus:outline-none`}
  ></button>
</div>

{/* Чат-бот */}
<div className="relative flex items-center mb-4">
  <input
    type="text"
    value="Чат-бот"
    readOnly
    className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
  />
  <button
    type="button"
    onClick={() => handleButtonClick('additionalFunctions.chatbot')}
    className={`ml-4 w-8 h-8 rounded-full ${
      formData.additionalFunctions.chatbot ? 'bg-green-500' : 'bg-gray-500'
    } focus:outline-none`}
  ></button>
</div>


{/* Личный кабинет для клиентов */}
<div className="relative flex items-center mb-4">
  <input
    type="text"
    value="Личный кабинет для клиентов"
    readOnly
    className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
  />
  <button
    type="button"
    onClick={() => handleButtonClick('additionalFunctions.personalAccount')}
    className={`ml-4 w-8 h-8 rounded-full ${
      formData.additionalFunctions.personalAccount ? 'bg-green-500' : 'bg-gray-500'
    } focus:outline-none`}
  ></button>
</div>


{/* Интеграция с CRM/ERP */}
<div className="relative flex items-center mb-4">
  <input
    type="text"
    value="Интеграция с CRM/ERP"
    readOnly
    className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
  />
  <button
    type="button"
    onClick={() => handleButtonClick('additionalFunctions.crmIntegration')}
    className={`ml-4 w-8 h-8 rounded-full ${
      formData.additionalFunctions.crmIntegration ? 'bg-green-500' : 'bg-gray-500'
    } focus:outline-none`}
  ></button>
</div>


{/* Поиск по сайту */}
<div className="relative flex items-center mb-4">
  <input
    type="text"
    value="Поиск по сайту"
    readOnly
    className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
  />
  <button
    type="button"
    onClick={() => handleButtonClick('additionalFunctions.siteSearch')}
    className={`ml-4 w-8 h-8 rounded-full ${
      formData.additionalFunctions.siteSearch ? 'bg-green-500' : 'bg-gray-500'
    } focus:outline-none`}
  ></button>
</div>


{/* Другие функции */}
      <div className="relative mb-4">
        <textarea
          id="otherFunctions"
          name="additionalFunctions.otherFunctions" // Указываем вложенность
          placeholder="Другие (указать)"
          value={formData.additionalFunctions.otherFunctions || ''} // Используем вложенное значение
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              additionalFunctions: {
                ...prev.additionalFunctions,
                otherFunctions: e.target.value, // Обновляем вложенное значение
              },
            }))
          }
          className="w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none resize-none h-28"
        ></textarea>
      </div>

        <h2 className="text-lg font-semibold mb-4 text-white">Дизайн (можно выбрать несколько)</h2>

        {/* Современный минимализм */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Современный минимализм"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('designPreferences.minimalism')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.designPreferences.minimalism ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Классический корпоративный */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Классический корпоративный"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('designPreferences.corporate')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.designPreferences.corporate ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Яркий и креативный */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Яркий и креативный"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('designPreferences.creative')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.designPreferences.creative ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Другие пожелания (описать) */}
        <div className="relative flex items-center mb-4">
            <textarea
              id="otherPreferences"
              name="otherPreferences"
              placeholder="Другие пожелания (описать)"
              value={formData.designPreferences.otherPreferences || ''} // Доступ через designPreferences
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  designPreferences: {
                    ...prev.designPreferences,
                    otherPreferences: e.target.value, // Обновляем внутри designPreferences
                  },
                }))
              }
              className="w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none resize-none h-20"
            ></textarea>
          </div>



        {/* Необходим брендбук компании */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Необходим брендбук компании"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('designPreferences.needBrandbook')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.designPreferences.needBrandbook ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Примеры сайтов */}
        <div className="relative flex items-center mb-4">
          <textarea
            id="siteExamples"
            name="siteExamples"
            placeholder="Примеры сайтов, которые вам нравятся (если есть). Укажите ссылки и что именно в них привлекает."
            value={formData.designPreferences.siteExamples || ''} // Защита от undefined
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                designPreferences: {
                  ...prev.designPreferences,
                  siteExamples: e.target.value, // Обновляем поле siteExamples
                },
              }))
            }
            className="w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none resize-none h-20"
          ></textarea>
        </div>

        <h2 className="text-lg font-semibold mb-4 text-white">Контент</h2>
        <p className="text-gray-400 mb-4">Есть ли у вас готовые материалы?</p>

        {/* Фотографии */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Фотографии"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('content.photos')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.content.photos ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Видео */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Видео"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('content.videos')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.content.videos ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Другие пожелания */}
        <div className="relative mb-4">
          <textarea
            id="otherMaterials"
            name="otherMaterials"
            placeholder="Другие пожелания (описать)"
            value={formData.content.otherMaterials || ''} // Доступ через content
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                content: {
                  ...prev.content,
                  otherMaterials: e.target.value, // Обновляем внутри content
                },
              }))
            }
            className="w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none resize-none h-20"
          ></textarea>
        </div>



        <p className="text-gray-400 mb-4">Нужно ли создавать контент с нуля?</p>

        {/* Фотосессия/видеосъемка */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            value="Фотосессия/видеосъемка"
            readOnly
            className="w-full rounded-md bg-[#37383B] text-white py-3 px-4 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none"
          />
          <button
            type="button"
            onClick={() => handleButtonClick('content.createFromScratch.photoshoot')}
            className={`ml-4 w-8 h-8 rounded-full ${
              formData.content.createFromScratch.photoshoot ? 'bg-green-500' : 'bg-gray-500'
            } focus:outline-none`}
          ></button>
        </div>


        {/* Другие пожелания (описать) */}
        <div className="relative mb-4">
          <textarea
            id="otherCreationNeeds"
            name="otherCreationNeeds"
            placeholder="Другие пожелания (описать)"
            value={formData.content.createFromScratch.otherCreationNeeds || ''} // Защита от undefined
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                content: {
                  ...prev.content,
                  createFromScratch: {
                    ...prev.content.createFromScratch,
                    otherCreationNeeds: e.target.value, // Обновляем вложенное поле
                  },
                },
              }))
            }
            className="w-full rounded-md bg-[#37383B] text-white py-2 px-3 placeholder-opacity-50 placeholder-gray-400 border-none focus:outline-none resize-none h-20"
          ></textarea>
        </div>


      
        

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
        >
          Отправить
        </button>
        {responseMessage && <p className="mt-4 text-center text-green-600">{responseMessage}</p>}
      </form>
    </div>
  );
}
