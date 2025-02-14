import React from 'react';
import './CosmeticFillings.css'; 
const CosmeticFillings = () => {
    return (
        <section className="section">
            <div className="container">
                <h2>الحشوات التجميلية</h2>

                <h3>ما هي الحشوات التجميلية؟</h3>
                <p>تعرف الحشوات التي يشبه لونها لون الأسنان بالحشوات التجميلية، إذ يتم وضعها في حال وجود تجاويف في السن.</p>

                <h3>الحشوات التجميلية وأهميتها</h3>
                <p>تدل التجاويف الموجودة في الأسنان على وجود ضعف أو تسوس فيها، يعمل طب الأسنان الحديث على تقديم حلول جيدة في مجال حشوات الأسنان، إذ يتم وضع حشوات الأسنان عندما يحدث تضرر في الأسنان بشكل كبير.</p>

                <h3>مميزات الحشوات التجميلية</h3>
                <ul className="feature-list">
                    <li>تشبه لون الأسنان الطبيعي</li>
                    <li>مقاومة للتآكل والتلف</li>
                    <li>آمنة وخالية من الزئبق</li>
                    <li>تحمي السن من التسوس المستقبلي</li>
                </ul>

                <div className="services-grid">
                    <div className="service-card">
                        <h4>الحشوات المركبة</h4>
                        <p>تتكون من الراتنجات وحبيبات صغيرة لتشابه لون الأسنان الطبيعي</p>
                    </div>
                    <div className="service-card">
                        <h4>حشوات الأينومر الزجاجي</h4>
                        <p>مزيج من الزجاج والآكريلك مثالي للمناطق قليلة الضغط</p>
                    </div>
                    <div className="service-card">
                        <h4>حشوات البورسلين</h4>
                        <p>متينة جداً وتشابه حشوات الفضة من حيث القوة</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CosmeticFillings;
