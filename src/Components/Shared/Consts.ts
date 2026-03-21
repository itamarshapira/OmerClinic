import neurology from '@/assets/Images/Icons/Neurology.png';
import cardiology from '@/assets/Images/Icons/Cardiology.png';
import orthopedics from '@/assets/Images/Icons/Orthopoedics.png';
import surgery from '@/assets/Images/Icons/Surgery.png';
//import dentistry from '@/assets/Images/Icons/Dentistry.png';
//import radiology from '@/assets/Images/Icons/Radiology.png';
//import urology from '@/assets/Images/Icons/Urology.png';
//import medicine from '@/assets/Images/Icons/Medicine.png';
//import seeMoreImage from '@/assets/Images/Icons/seeMoreImage.png';

import Banner1 from '@/assets/Images/banner1.png';
import Banner2 from '@/assets/Images/banner2.png'; // ..

import doc1 from '@/assets/Images/Doctors/doc1.png';
import doc2 from '@/assets/Images/Doctors/doc2.png';
import doc3 from '@/assets/Images/Doctors/doc3.png';
import doc4 from '@/assets/Images/Doctors/doc4.png';

import user1 from '@/assets/Images/Users/user1.jpg';
import user2 from '@/assets/Images/Users/user2.jpg';
import user3 from '@/assets/Images/Users/user3.jpg';

import logo from '@/assets/Images/Logo.png';

export const links = ['בית', 'תמונות', 'טיפולים', 'המלצות'];

export const descNums = [
  {
    num: '10+',
    text: 'שנות ניסיון',
  },
  {
    num: '1000+',
    text: 'מטופלים מרוצים',
  },
  {
    num: '1:1',
    text: 'יחס אישי',
  },
  {
    num: '5',
    text: 'שיטות טיפול',
  },
  {
    num: '100%',
    text: 'ליווי מקצועי',
  },
];

export const ServicesData = [
  {
    img: neurology,
    title: 'דיקור סיני',
    id: 'acupuncture',
    heading: 'דיקור סיני',
    texts: [
      'איזון הגוף והנפש לפי עקרונות הרפואה הסינית',
      'הקלה על כאבים כרוניים ואקוטיים',
      'תמיכה במתח, סטרס ועייפות',
      'שיפור איכות השינה והרוגע הכללי',
      'חיזוק המערכת החיסונית',
      'טיפול מותאם אישית לפי מצב המטופל',
      'ליווי מקצועי לאורך תהליך ההחלמה',
    ],
  },
  {
    img: cardiology,
    title: 'כוסות רוח',
    id: 'cupping',
    heading: 'כוסות רוח',
    texts: [
      'שחרור עומסים ומתחים מהשרירים',
      'שיפור זרימת הדם באזור המטופל',
      'הקלה על כאבי גב, כתפיים וצוואר',
      'סיוע בהתאוששות לאחר מאמץ',
      'טיפול משלים להפחתת כאב ונוקשות',
      'שילוב עם טיפולים נוספים לפי הצורך',
      'התאמה אישית לרגישות ולמצב המטופל',
    ],
  },
  {
    img: orthopedics,
    title: 'שיאצו',
    id: 'shiatsu',
    heading: 'שיאצו',
    texts: [
      'טיפול במגע לשחרור מתחים וחסימות',
      'שיפור תחושת הרוגע והאיזון',
      'סיוע בהפחתת עומס גופני ונפשי',
      'תמיכה בכאבי שרירים ומפרקים',
      'עידוד זרימה ואנרגיה בגוף',
      'טיפול עדין ומותאם אישית',
      'חיזוק הקשר בין גוף לנפש',
    ],
  },
  {
    img: surgery,
    title: 'צמחים',
    id: 'vegetal',
    heading: 'צמחים',
    texts: [
      'טיפול מגע סיני ממוקד ואפקטיבי',
      'הקלה על כאבי גב, צוואר וכתפיים',
      'שיפור טווחי תנועה',
      'שחרור שרירים תפוסים',
      'טיפול מותאם למצבי כאב שונים',
      'שילוב טכניקות לפי צורכי המטופל',
      'תמיכה בתהליך שיקום והחלמה',
    ],
  },
  // {
  //   img: dentistry,
  //   title: 'ייעוץ תזונתי',
  //   id: 'nutrition',
  //   heading: 'ייעוץ תזונתי',
  //   texts: [
  //     'התאמת תזונה לפי עקרונות הרפואה הסינית',
  //     'תמיכה בעיכול ובתחושת קלילות',
  //     'הכוונה לאורח חיים מאוזן',
  //     'התאמה אישית לפי מצב בריאותי',
  //     'סיוע בעייפות, חולשה וחוסר איזון',
  //     'בניית המלצות פשוטות ליישום ביום־יום',
  //     'שילוב נכון עם תוכנית הטיפול הכללית',
  //   ],
  // },
  // {
  //   img: radiology,
  //   title: 'טיפול בכאב',
  //   id: 'pain-relief',
  //   heading: 'טיפול בכאב',
  //   texts: [
  //     'התמקדות בכאב אקוטי וכרוני',
  //     'הקלה על כאבי גב, ברכיים, צוואר וכתפיים',
  //     'שילוב שיטות טיפול לפי הצורך',
  //     'בניית תוכנית טיפול מדויקת',
  //     'שיפור תפקוד ואיכות חיים',
  //     'מעקב אחר תגובת הגוף לטיפול',
  //     'התאמה אישית לכל מטופל ומטופלת',
  //   ],
  // },
  // {
  //   img: urology,
  //   title: 'איזון מתחים',
  //   id: 'stress-balance',
  //   heading: 'איזון מתחים וסטרס',
  //   texts: [
  //     'טיפול להפחתת מתח ועומס נפשי',
  //     'שיפור תחושת רוגע ושקט פנימי',
  //     'סיוע בשינה לא איכותית',
  //     'תמיכה בתקופות עומס ושחיקה',
  //     'איזון גוף־נפש בגישה טבעית',
  //     'הקשבה מלאה והתאמת טיפול אישית',
  //     'ליווי עדין ומקצועי לאורך הדרך',
  //   ],
  // },
  // {
  //   img: medicine,
  //   title: 'טיפול משולב',
  //   id: 'integrated-care',
  //   heading: 'טיפול משולב',
  //   texts: [
  //     'שילוב בין דיקור, מגע והכוונה אישית',
  //     'התאמה מלאה לצורכי המטופל',
  //     'בניית תוכנית טיפול מקיפה',
  //     'מענה למצבים גופניים ורגשיים',
  //     'תמיכה בשיקום ובאיזון כללי',
  //     'מעקב מקצועי לאורך סדרת הטיפולים',
  //     'גישה הוליסטית הרואה את האדם השלם',
  //   ],
  // },
  // {
  //   img: seeMoreImage,
  //   title: 'עוד טיפולים',
  //   id: 'more-treatments',
  //   heading: 'טיפולים נוספים',
  //   texts: [
  //     'התאמת טיפול אישית לפי הצורך',
  //     'שילוב שיטות עבודה שונות',
  //     'מענה למצבים מורכבים יותר',
  //     'בניית תהליך טיפול הדרגתי',
  //     'גישה טבעית, רגועה ומקצועית',
  //     'אפשרות לשילוב מספר כלים טיפוליים',
  //     'ליווי אישי לכל אורך הדרך',
  //   ],
  // },
];

export const Banner1Data = {
  heading: 'כאן כדי להעניק טיפול מקצועי, אישי ומותאם בדיוק לך',
  texts: [
    'קביעת תור פשוטה ונוחה',
    'יחס אישי והקשבה מלאה',
    'טיפול מותאם לצורכי המטופל',
    'שילוב שיטות טיפול לפי הצורך',
    'ליווי מקצועי לאורך כל התהליך',
  ],
  img: Banner1,
};

export const DoctorsData = {
  heading: 'גלריית תמונות',
  doctors: [
    {
      img: doc1,
      name: 'עומר שמידט',
      job: 'מטפלת ברפואה סינית',
    },
    {
      img: doc2,
      name: 'כוסות רוח',
      job: '',
    },
    {
      img: doc3,
      name: '',
      job: '',
    },
    {
      img: doc4,
      name: '',
      job: '',
    },
  ],
  heading2: 'מי אני?',
  desc: 'קליניקה מקצועית המעניקה טיפול אישי ברפואה סינית ובשיטות מגע משלימות, מתוך הקשבה, דיוק והתאמה לכל מטופל ומטופלת. המטרה שלנו היא לעזור לך להרגיש טוב יותר, לשחרר עומסים, להפחית כאבים ולחזור לאיזון.',
  img: Banner2,
};

export const FeedbackData = {
  heading: 'מטופלים מספרים',
  feedbacks: [
    {
      img: user1,
      name: 'איתמר',
      job: 'מטופל',
      desc: 'ממליץ בחום בתור אדם מתאמן עם פציעה מהצבא.עומר תמיד מדויקת, קשובה ויודעת להתאים את הטיפול בצורה הטובה ביותר עבורי. ',
    },
    {
      img: user2,
      name: 'שירה',
      job: 'מטופלת',
      desc: 'הטיפול עזר לי מאוד בתקופה של סטרס ועייפות. הרגשתי הקלה, יותר שקט פנימי ותחושה שיש מי שמקשיב באמת.',
    },
    {
      img: user3,
      name: 'איתי',
      job: 'מטופל',
      desc: 'חוויה מקצועית ונעימה מאוד. המקום מרגיע, הטיפול מדויק, והתחושה היא שמקבלים מענה אמיתי ולא טיפול גנרי.',
    },
  ],
};

export const FooterData = {
  logo: logo,
  addresses: ['רחוב לדוגמה 12', 'תל אביב'],
  phone: '050-123-4567',
  departments: [
    'דיקור סיני',
    'כוסות רוח',
    'שיאצו',
    'טווינא',
    'טיפול בכאב',
    'עוד טיפולים',
  ],
  links: links,
};