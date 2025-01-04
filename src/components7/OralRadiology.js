import React from 'react';
import './OralRadiology.css'; 

const OralRadiology = () => {
    return (
        <section className="section">
            <div className="container">
                <h2>أشعة الفم والأسنان والوجه والفكين</h2>
                
                <h3>ما هي أشعة الفم والأسنان؟</h3>
                <p>هو الفرع الرئيسي لطب الأسنان الذي يتم فيه تحديد النتائج لتخطيط علاج الأشخاص الذين يعانون من مشاكل صحية في الفم والأسنان ومنطقة الفك.</p>
                
                <h3>طرق التصوير المطبقة</h3>
                <p>تشمل طرق التصوير المطبقة ما يلي:</p>
                <ul className="methods-list">
                    <li>الأشعة السينية البانورامية للأسنان</li>
                    <li>التصوير بالأشعة السيفالومترية</li>
                    <li>التصوير الإشعاعي (داخل الفم وخارجه)</li>
                    <li>التصوير الشعاعي</li>
                    <li>التصوير المقطعي للأسنان</li>
                </ul>

                <h3>التشخيص الفموي</h3>
                <p>من أجل نجاح العلاج داخل الفم، من الضروري إجراء التشخيص الصحيح وتطبيق العلاج بشكل صحيح.</p>

                <h3>التصوير بالأشعة أثناء الحمل</h3>
                <p>إنّ كمية الإشعاع المنبعثة من أجهزة التصوير الإشعاعي المستخدمة في طب الأسنان منخفضة جداً ولا تشكل أي خطر على صحة الإنسان.</p>
            </div>
        </section>
    );
};

export default OralRadiology;
