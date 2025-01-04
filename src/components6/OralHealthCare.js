import React from 'react';
import './OralHealthCare.css'; 
const OralHealthCare = () => {
    return (
        <section className="section">
            <div className="container">
                <h2>العناية بصحة الفم والأسنان</h2>
                
                <h3>أهمية صحة الفم</h3>
                <p>تعد صحة الفم من أهم جوانب الصحة العامة، حيث تؤثر على مظهر الشخص وشعوره بالثقة بالنفس. كما أن صحة الفم الجيدة تساعد على الوقاية من العديد من الأمراض، مثل تسوس الأسنان وأمراض اللثة.</p>
                
                <h3>أهم النصائح والخطوات:</h3>
                <ul className="tips-list">
                    <li>تنظيف الأسنان بالفرشاة والمعجون مرتين يوميًا لمدة دقيقتين.</li>
                    <li>استخدام خيط الأسنان مرة واحدة يوميًا.</li>
                    <li>زيارة طبيب الأسنان بانتظام مرة كل ستة أشهر.</li>
                    <li>تجنب الأطعمة والمشروبات السكرية.</li>
                    <li>شرب الكثير من الماء لترطيب الفم.</li>
                    <li>التوقف عن التدخين.</li>
                </ul>

                <h3>نصائح إضافية للعناية بصحة الفم:</h3>
                <ul className="tips-list">
                    <li>استخدم فرشاة أسنان ناعمة لحماية اللثة.</li>
                    <li>قم بتغيير فرشاة الأسنان كل ثلاثة أشهر.</li>
                    <li>قم بتنظيف اللسان لإزالة البكتيريا.</li>
                    <li>استخدم مضمضة للفم لإزالة البكتيريا.</li>
                    <li>اتبع نظام غذائي صحي للحفاظ على صحة الأسنان.</li>
                </ul>
            </div>
        </section>
    );
};

export default OralHealthCare;
