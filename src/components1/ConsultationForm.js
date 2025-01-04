import React from 'react';
import './ConsultationForm.css';
import Header from './Header';
import FormInput from './FormInput';
import Button from './Button';
const ConsultationForm = () => {
  return (
    <div className="consultation-form">
      <Header />
      <form className="consultation-form-body" onSubmit={handleSubmit}>
        <FormInput 
          id="step1"
          label="الخطوة الأولى:"
          placeholder="اكتب استفسارك هنا"
        />
        <FormInput 
          id="step2"
          label="الخطوة الثانية:"
          placeholder="تفاصيل أخرى"
        />
        <FormInput 
          id="first-name"
          label="الاسم الأول:"
        />
        <FormInput 
          id="last-name"
          label="الاسم الأخير:"
        />
        <FormInput 
          id="phone"
          label="رقم الهاتف:"
          type="tel"
        />
        <FormInput 
          id="email"
          label="الايميل:"
          type="email"
        />
        <Button type="submit">التالي</Button>
      </form>
    </div>
  );
};

export default ConsultationForm;
