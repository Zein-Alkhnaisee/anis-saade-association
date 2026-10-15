import React, { useState, useEffect, useRef } from "react";
import { useApp } from "./../../context/AppContext";
import "./AboutSection.css";
import {
  FaShieldAlt,
  FaUserTie,
  FaUserCog,
  FaLightbulb,
  FaChalkboardTeacher,
  FaTools,
  FaBriefcase,
  FaCalendarAlt, 
  FaHandHoldingHeart, 
  FaChild, 
  FaProjectDiagram,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaBullseye,
} from "react-icons/fa";


const AboutSection = () => {
  const { language, t } = useApp();
  const [visibleElements, setVisibleElements] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const sectionRef = useRef(null);

  // بيانات المسميات الوظيفية مع التفاصيل الكاملة
  const jobPositions = [
    {
      id: 1,
      title: {
        en: "Community Center Supervisor",
        ar: "مشرف مركز مجتمعي",
      },
      description: {
        en: "Oversees community center operations, manages teams, and coordinates programs for children with disabilities and their families",
        ar: "يشرف على عمليات المركز المجتمعي، يدير الفرق وينسق البرامج المقدمة للأطفال ذوي الإعاقة وأسرهم",
      },
      responsibilities: {
        en: [
          "Center management and team supervision",
          "Program planning and implementation",
          "Community outreach and coordination",
        ],
        ar: [
          "إدارة المركز والإشراف على الفريق",
          "تخطيط وتنفيذ البرامج",
          "التواصل المجتمعي والتنسيق",
        ],
      },
      requirements: {
        en: "Bachelor's degree + management experience is not less than two years",
        ar: "إجازة جامعية + خبرة إدارية لا تقل عن سنتين",
      },
      icon: <FaUserTie />,
      // التفاصيل الكاملة للوظيفة
      fullDetails: {
        en: {
          objective:
            "Comprehensive supervision of community center operations and team management",
          tasks: [
            "Full supervision of the center, receiving equipment inventory, and ensuring their maintenance and preservation",
            "Developing monthly work plans including necessary logistical needs in coordination with the work team and program officials",
            "Submitting monthly work plans to project management at the beginning of each month and informing them of any emergency modifications",
            "Communicating with the logistics officer to secure all center requirements",
            "Supervising and following up on work within the center in line with the established plan",
            "Monitoring and tracking team attendance daily and preparing attendance records on a monthly basis",
            "Coordinating all programs and activities in a balanced manner",
            "Managing all administrative and financial activities of the center",
            "Providing positive support to the work team and assisting in problem-solving",
            "Ensuring work follows the association's code of conduct for dealing with children",
          ],
          qualifications:
            "University degree, preference for Master's holders in a relevant field",
          experience: [
            "At least 2 years of administrative experience and team leadership",
            "At least 3 years of community work experience",
          ],
          skills: [
            "High ability in planning and needs assessment",
            "Problem-solving skills",
            "Good proficiency in computer programs and office equipment",
            "High administrative and organizational skills",
            "Ability to work under pressure",
            "Good communication and interpersonal skills",
            "Teamwork",
            "Ability to innovate and develop skills",
            "Full-time work commitment",
          ],
          personalTraits: [
            "Punctuality",
            "Flexibility",
            "Focus and logical thinking",
            "Calm temperament and non-emotional",
            "Tact in speech and cheerful face",
            "Good listening, understanding and situational awareness with awareness and focus",
            "Ability to face critical situations wisely",
            "Taking responsibility and facing the consequences of decisions with steadfastness",
            "Strength of personality, composure and decisiveness",
            "Accuracy and honesty",
          ],
        },
        ar: {
          objective: "الإشراف الكامل على عمليات المركز المجتمعي وإدارة الفريق",
          tasks: [
            "الإشراف الكامل على المركز، واستلام عهدة التجهيزات، والتأكد من صيانتها و الحفاظ عليها",
            "وضع الخطة الشهرية للعمل في المركز والمتضمنة للاحتياجات اللوجستية اللازمة وذلك بالتنسيق مع فريق العمل ومسؤولي البرامج",
            "تسليم خطة العمل الشهرية لإدارة المشروع في مدة أقصاها بداية كل شهر وإعلامهم بأي تعديلات طارئة",
            "التواصل مع المسؤول اللوجستي لتأمين كافة مستلزمات المركز",
            "الإشراف ومتابعة العمل ضمن المركز بما يتماشى مع الخطة الموضوعة",
            "متابعة ومراقبة دوام الفريق بشكل يومي وتحضير سجلات الدوام على أساس شهري",
            "تنسيق جميع البرامج والأنشطة بشكل متوازن",
            "إدارة جميع الأنشطة الإدارية والمالية الخاصة بالمركز",
            "تقديم الدعم الايجابي لفريق العمل و مساعدته في حل المشكلات",
            "متابعة العمل ضمن مدونة السلوك الخاصة بالجمعية والخاصة بالتعامل مع الأطفال",
          ],
          qualifications:
            "إجازة جامعية والأفضلية لحملة الماجستير ويفضل في اختصاص ذو صلة بالعمل",
          experience: [
            "خبرة في العمل الإداري وقيادة فرق العمل لا تقل عن سنتين",
            "خبرة في العمل المجتمعي لا تقل عن ثلاث سنوات",
          ],
          skills: [
            "مقدرة عالية على التخطيط وتقييم الاحتياجات",
            "مهارة حل المشكلات",
            "التعامل الجيد مع برامج الحاسب الآلي والأجهزة المكتبية",
            "مهارات إدارية و تنظيمية عالية",
            "القدرة على تحمل ضغط العمل",
            "مهارات جيدة في الاتصال والتواصل مع الأخرين",
            "العمل ضمن فريق",
            "القدرة على الإبداع وتنمية المهارات",
            "التفرغ التام للعمل",
          ],
          personalTraits: [
            "الانضباط في المواعيد",
            "المرونة",
            "التركيز والمنطقية في التفكير",
            "هادئ الطباع وغير انفعالي",
            "اللباقة في الحديث وبشاشة الوجه",
            "حسن الاستماع و الفهم و إدراك المواقف بوعى و تركيز",
            "القدرة على مواجهة المواقف الحرجة بحكمة",
            "تحمل المسؤولية ومواجهة تبعات القرارات بثبات",
            "قوة الشخصية و رباطة الجأش و الحزم",
            "الدقة والأمانة",
          ],
        },
      },
    },
    {
      id: 2,
      title: {
        en: "Administrative Assistant",
        ar: "مساعد إداري",
      },
      description: {
        en: "Manages documentation, data archiving, and administrative support for program operations",
        ar: "يدير التوثيق، أرشفة البيانات والدعم الإداري لعمليات البرامج",
      },
      responsibilities: {
        en: [
          "Documentation and data management",
          "Beneficiary registration",
          "Report preparation",
        ],
        ar: ["التوثيق وإدارة البيانات", "تسجيل المستفيدين", "إعداد التقارير"],
      },
      requirements: {
        en: "Bachelor's degree + Experience in office administrative work of not less than two years",
        ar: "إجازة جامعية +	خبرة في مجال العمل الإداري المكتبي لا تقل عن سنتين",
      },
      icon: <FaUserCog />,
      fullDetails: {
        en: {
          objective:
            "Recording, organizing and preserving team data and information and preparing required periodic reports",
          tasks: [
            "Receiving children, youth and caregivers wishing to participate in activities",
            "Opening files and registering participants' data in activities according to required forms and updating them periodically",
            "Archiving center or team documents and organizing them within the archiving systems and mechanisms adopted in the project",
            "Implementing pre and post evaluation forms",
            "Managing beneficiary data and sharing it with relevant departments",
            "Collecting daily information about the team's work, coordinating it and raising it to the reports officer",
            "Preparing weekly and monthly reports related to the project work according to approved forms",
            "Carrying out archiving operations included in some project services and sharing them with the data officer periodically",
            "Documenting meeting minutes",
            "Assistant and deputy of the center or team supervisor",
          ],
          qualifications:
            "University degree in a suitable scientific specialization",
          experience: [
            "At least 2 years of experience in office administrative work",
            "At least 2 years of community work experience",
            "Excellent experience working with Microsoft Office programs",
            "Excellent experience working with computers",
          ],
          skills: [
            "Good proficiency in computer programs and office equipment",
            "High administrative and organizational skills",
            "Ability to work under pressure",
            "Communication and interpersonal skills",
            "Teamwork",
            "Skill in preparing work reports",
          ],
          personalTraits: [
            "Punctuality",
            "Adherence to data protection and confidentiality",
            "Focus and logical thinking",
            "Calm temperament and non-emotional",
            "Tact in speech and cheerful face",
            "Good listening, understanding and situational awareness with awareness and focus",
            "Ability to face critical situations wisely",
            "Taking responsibility and facing the consequences of decisions with steadfastness",
            "Strength of personality, composure and decisiveness",
            "Accuracy and honesty",
          ],
        },
        ar: {
          objective:
            "تسجيل وتنظيم وحفظ البيانات والمعلومات الخاصة بالفريق وإعداد التقارير الدورية المطلوبة",
          tasks: [
            "استقبال الأطفال والشباب و مقدمي الرعاية الراغبين بالمشاركة في النشاطات",
            "فتح ملفات وتسجيل بيانات المشاركين في النشاطات وفقا للنماذج المطلوبة وتحديثها بشكل دوري",
            "أرشفة الوثائق الخاصة بالمركز أو بالفريق وتنظيمها ضمن أنظمة وآلية الأرشفة المعتمدة في المشروع",
            "تنفيذ استمارات التقييم القبلية والبعدية",
            "إدارة بيانات المستفيدين ومشاركتها مع الأقسام المعنية",
            "جمع المعلومات اليومية عن عمل الفريق وتنسيقها ورفعها لمسؤول التقارير",
            "إعداد التقارير الأسبوعية والشهرية المتعلقة بعمل المشروع وفقا للنماذج المعتمدة",
            "القيام بعمليات الأرشفة التي تتضمنها بعض خدمات المشروع ومشاركتها مع مسؤول البيانات بشكل دوري",
            "توثيق محاضر الاجتماعات",
            "مساعد ونائب مشرف المركز أو الفريق",
          ],
          qualifications: "إجازة جامعية ذات اختصاص علمي مناسب",
          experience: [
            "خبرة في مجال العمل الإداري المكتبي لا تقل عن سنتين",
            "خبرة في العمل المجتمعي لا تقل عن سنتين",
            "خبرة ممتازة في العمل على برامج Microsoft Office",
            "خبرة ممتازة في العمل على الحاسب الآلي",
          ],
          skills: [
            "التعامل الجيد مع برامج الحاسب الآلي والأجهزة المكتبية",
            "مهارات إدارية و تنظيمية عالية",
            "القدرة على تحمل ضغط العمل",
            "مهارات الاتصال و التواصل مع الأخرين",
            "العمل ضمن فريق",
            "المهارة في إعداد تقارير العمل",
          ],
          personalTraits: [
            "الانضباط في المواعيد",
            "التمسك بحماية البيانات وسريتها",
            "التركيز والمنطقية في التفكير",
            "هادئ الطباع وغير انفعالي",
            "اللباقة في الحديث وبشاشة الوجه",
            "حسن الاستماع و الفهم وإدراك المواقف بوعى و تركيز",
            "القدرة على مواجهة المواقف الحرجة بحكمة",
            "تحمل المسؤولية ومواجهة تبعات القرارات بثبات",
            "قوة الشخصية و رباطة الجأش والحزم",
            "الدقة والأمانة",
          ],
        },
      },
    },
    {
      id: 3,
      title: {
        en: "Initiatives Officer",
        ar: "مسؤول مبادرات",
      },
      description: {
        en: "Designs and implements youth initiatives and community development programs",
        ar: "يصمم وينفذ مبادرات الشباب وبرامج التنمية المجتمعية",
      },
      responsibilities: {
        en: [
          "Initiative design and planning",
          "Youth engagement programs",
          "Community needs assessment",
        ],
        ar: [
          "تصميم المبادرات والتخطيط",
          "برامج إشراك الشباب",
          "تقييم الاحتياجات المجتمعية",
        ],
      },
      requirements: {
        en: "Bachelor's degree + Community work experience",
        ar: "إجازة جامعية + خبرة في العمل المجتمعي",
      },
      // icon: "💡",FaLightbulb
      icon: <FaLightbulb />,
      fullDetails: {
        en: {
          objective:
            "Designing and preparing initiatives and implementing youth development programs",
          tasks: [
            "Designing and preparing initiatives",
            "Developing monthly plan for initiatives in the center including necessary logistical needs in coordination with the team leader and project management",
            "Coordinating all initiatives and activities in a balanced manner",
            "Following up and supervising the implementation of initiatives in coordination between the local community and the association",
            "Documenting and evaluating initiatives and writing reports and submitting them to project management",
            "Ensuring the availability of safety and security for children during the implementation of initiatives",
            "Managing all administrative and financial activities of the initiative under the supervision of the team leader",
            "Providing positive support to life skills trainers",
            "Following up work within the association's code of conduct for dealing with children",
            "Participating in discussion sessions with the community in the presence of team members to identify actual needs and plan initiatives accordingly",
          ],
          qualifications:
            "University degree, preference for holders of scientific degrees",
          experience: [
            "At least 2 years of community work experience",
            "At least 1 year of experience working in adolescent development and participation projects",
          ],
          skills: [
            "High ability in planning and needs assessment",
            "Problem-solving skills",
            "Good proficiency in computer programs and office equipment",
            "Ability to work under pressure",
            "Full-time work commitment",
          ],
          personalTraits: [
            "Punctuality",
            "Tact in speech and cheerful face",
            "Ability to face critical situations wisely",
            "Taking responsibility and facing the consequences of decisions with steadfastness",
            "Accuracy and honesty",
          ],
        },
        ar: {
          objective: "تصميم وتحضير المبادرات وتنفيذ برامج تنمية الشباب",
          tasks: [
            "تصميم وتحضير المبادرات",
            "وضع الخطة الشهرية للمبادرات في المركز والمتضمنة للاحتياجات اللوجستية اللازمة وذلك بالتنسيق مع مدير الفريق وادارة المشروع",
            "تنسيق جميع المبادرات والأنشطة بشكل متوازن",
            "المتابعة والاشراف على تنفيذ المبادرات بالتنسيق بين المجتمع المحلي والجمعية",
            "توثيق وتقييم المبادرات وكتابة التقارير وتقديمها الى إدارة المشروع",
            "التأكد من توافر الأمان والسلامة للأطفال اثناء تنفيذ المبادرات",
            "إدارة جميع الأنشطة الإدارية والمالية الخاصة بالمبادرة بأشراف قائد الفريق",
            "تقديم الدعم الايجابي لمدربي مهارات الحياة",
            "متابعة العمل ضمن مدونة السلوك الخاصة بالجمعية والخاصة بالتعامل مع الأطفال",
            "المشاركة في جلسات النقاش مع المجتمع وبحضور أعضاء الفريق لمعرفة الاحتياجات الفعلية وتخطيط المبادرات بما يتناسب معها",
          ],
          qualifications: "إجازة جامعية والأفضلية لحملة الشهادات العلمية",
          experience: [
            "خبرة في العمل المجتمعي لا تقل عن سنتين",
            "خبرة بالعمل بمشاريع نماء ومشاركة اليافعين لا تقل عن سنة",
          ],
          skills: [
            "مقدرة عالية على التخطيط وتقييم الاحتياجات",
            "مهارة حل المشكلات",
            "التعامل الجيد مع برامج الحاسب الآلي والأجهزة المكتبية",
            "القدرة على تحمل ضغط العمل",
            "التفرغ التام للعمل",
          ],
          personalTraits: [
            "الانضباط في المواعيد",
            "اللباقة في الحديث وبشاشة الوجه",
            "القدرة على مواجهة المواقف الحرجة بحكمة",
            "تحمل المسؤولية ومواجهة تبعات القرارات بثبات",
            "الدقة والأمانة",
          ],
        },
      },
    },
    {
      id: 4,
      title: {
        en: "Life Skills Trainer",
        ar: "مدرب مهارات الحياة",
      },
      description: {
        en: "Empowers youth through life skills training, creative thinking, and leadership development",
        ar: "يمكّن الشباب من خلال تدريب المهارات الحياتية، التفكير الإبداعي وتنمية القيادة",
      },
      responsibilities: {
        en: [
          "Life skills training sessions",
          "Youth empowerment programs",
          "Creative workshops",
        ],
        ar: [
          "جلسات تدريب المهارات الحياتية",
          "برامج تمكين الشباب",
          "ورش العمل الإبداعية",
        ],
      },
      requirements: {
        en: "Youth engagement and training skills",
        ar: "مهارات إشراك الشباب والتدريب",
      },
      icon: <FaChalkboardTeacher />,
      fullDetails: {
        en: {
          objective:
            "Empowering youth and adolescents through life skills training and development programs",
          description:
            "Anis Saadeh Angelic Association believes that the development and participation of adolescents and youth is not a goal but a way of life. If you are a young man or woman aged 20-28, able and willing to participate with us in activating this experience, actively participating in community activities, have many creative and innovative ideas, a pioneer and leader in your community, believe in change and your role in change, have the ability to attract youth and adolescents and influence them, and have a wide network of relationships - we are waiting for you to share your CV in your innovative way.",
          qualifications:
            "Youth aged 20-28 years with passion for community work",
          skills: [
            "Creative thinking and innovation",
            "Youth engagement and influence",
            "Leadership and community pioneering",
            "Network building and relationship management",
            "Training and facilitation skills",
          ],
          personalTraits: [
            "Belief in change and personal role in change",
            "Pioneering spirit and leadership",
            "Creativity and innovation",
            "Active community participation",
            "Ability to attract and influence youth",
          ],
        },
        ar: {
          objective:
            "تمكين الشباب واليافعين من خلال تدريب المهارات الحياتية وبرامج التنمية",
          description:
            "تؤمن جمعية أنيس سعادة الملائكية بأن نماء ومشاركة اليافعين والشباب ليس هدفاً ولكنه أسلوب حياة. فإن كنت شاباً أو شابة من عمر (20-28) سنة، قادراً وراغباً في مشاركتنا تفعيل هذه التجربة، مشاركاً فاعلاً في نشاطات مجتمعية، لديك العديد من الأفكار المبدعة والخلاقة، رائداً وقائداً في مجتمعك، تؤمن بالتغيير وبدورك في التغيير، لديك القدرة على استقطاب الشباب واليافعين والتأثير بهم، وتتمتع بشبكة علاقات واسعة - نحن بانتظارك لتشاركنا سيرتك الذاتية بطريقتك المبتكرة.",
          qualifications: "شباب من عمر 20-28 سنة لديهم شغف العمل المجتمعي",
          skills: [
            "التفكير الإبداعي والابتكار",
            "إشراك الشباب والتأثير فيهم",
            "القيادة والريادة المجتمعية",
            "بناء الشبكات وإدارة العلاقات",
            "مهارات التدريب والتيسير",
          ],
          personalTraits: [
            "الإيمان بالتغيير والدور الشخصي فيه",
            "الروح الريادية والقيادية",
            "الإبداع والابتكار",
            "المشاركة المجتمعية الفاعلة",
            "القدرة على استقطاب الشباب والتأثير فيهم",
          ],
        },
      },
    },
    {
      id: 5,
      title: {
        en: "Vocational Training Officer",
        ar: "مسؤول تدريبات مهنية",
      },
      description: {
        en: "Develops and implements vocational training programs for youth skill development",
        ar: "يطور وينفذ برامج التدريب المهني لتنمية مهارات الشباب",
      },
      responsibilities: {
        en: [
          "Vocational program design",
          "Skills development training",
          "Employment preparation",
        ],
        ar: [
          "تصميم البرامج المهنية",
          "تدريب تنمية المهارات",
          "التجهيز للتوظيف",
        ],
      },
      requirements: {
        en: "Bachelor's + vocational training experience",
        ar: "إجازة جامعية + خبرة تدريب مهني",
      },
      //<FaTools/>
      icon: <FaBriefcase />,
      fullDetails: {
        en: {
          objective:
            "Developing and implementing vocational training programs for youth skills development",
          tasks: [
            "Designing and preparing vocational training",
            "Developing monthly plan for training in the center including necessary logistical needs in coordination with the team leader and project management",
            "Coordinating all training in a balanced manner",
            "Following up and supervising the implementation of vocational training according to the needs of the local community",
            "Documenting and evaluating training and writing reports and submitting them to project management",
            "Ensuring the availability of safety and security for youth and children during the implementation of training",
            "Managing all administrative and financial activities of the training under the supervision of the team leader",
            "Following up work within the association's code of conduct for dealing with children",
            "Participating in discussion sessions with the community in the presence of team members to identify actual needs and plan training accordingly",
            "Archiving and documenting all training data",
          ],
          qualifications:
            "University degree, preference for holders of scientific degrees",
          experience: [
            "At least 2 years of community work experience",
            "At least 1 year of experience working in adolescent development and participation projects",
            "At least 2 years of experience in activities related to vocational training",
          ],
          skills: [
            "High ability in planning and needs assessment",
            "Problem-solving skills",
            "Good proficiency in computer programs and office equipment",
            "Ability to work under pressure",
            "Full-time work commitment",
          ],
          personalTraits: [
            "Punctuality",
            "Tact in speech and cheerful face",
            "Ability to face critical situations wisely",
            "Taking responsibility and facing the consequences of decisions with steadfastness",
            "Accuracy and honesty",
          ],
        },
        ar: {
          objective: "تطوير وتنفيذ برامج التدريب المهني لتنمية مهارات الشباب",
          tasks: [
            "تصميم وتحضير التدريبات المهنية",
            "وضع الخطة الشهرية للتدريبات في المركز والمتضمنة للاحتياجات اللوجستية اللازمة وذلك بالتنسيق مع مدير الفريق وادارة المشروع",
            "تنسيق جميع التدريبات بشكل متوازن",
            "المتابعة والاشراف على تنفيذ التدريبات المهنية حسب احتياجات المجتمع المحلي",
            "توثيق وتقييم التدريبات وكتابة التقارير وتقديمها الى إدارة المشروع",
            "التأكد من توافر الأمان والسلامة للشباب وللأطفال اثناء تنفيذ التدريبات",
            "إدارة جميع الأنشطة الإدارية والمالية الخاصة بالتدريبات بأشراف قائد الفريق",
            "متابعة العمل ضمن مدونة السلوك الخاصة بالجمعية والخاصة بالتعامل مع الأطفال",
            "المشاركة في جلسات النقاش مع المجتمع وبحضور أعضاء الفريق لمعرفة الاحتياجات الفعلية وتخطيط التدريبات بما يتناسب معها",
            "أرشفة وتوثيق كافة بيانات التدريبات",
          ],
          qualifications: "إجازة جامعية والأفضلية لحملة الشهادات العلمية",
          experience: [
            "خبرة في العمل المجتمعي لا تقل عن سنتين",
            "خبرة بالعمل بمشاريع نماء ومشاركة اليافعين لا تقل عن سنة",
            "خبرة بالعمل بالأنشطة المتعلقة بالتدريبات المهنية لمدة لا تقل عن سنتين",
          ],
          skills: [
            "مقدرة عالية على التخطيط وتقييم الاحتياجات",
            "مهارة حل المشكلات",
            "التعامل الجيد مع برامج الحاسب الآلي والأجهزة المكتبية",
            "القدرة على تحمل ضغط العمل",
            "التفرغ التام للعمل",
          ],
          personalTraits: [
            "الانضباط في المواعيد",
            "اللباقة في الحديث وبشاشة الوجه",
            "القدرة على مواجهة المواقف الحرجة بحكمة",
            "تحمل المسؤولية ومواجهة تبعات القرارات بثبات",
            "الدقة والأمانة",
          ],
        },
      },
    },
    {
      id: 6,
      title: {
        en: "Child Protection Specialist",
        ar: "أخصائي حماية الطفل",
      },
      description: {
        en: "Ensures child safety and implements protection policies in all programs",
        ar: "يضمن سلامة الطفل وينفذ سياسات الحماية في جميع البرامج",
      },
      responsibilities: {
        en: [
          "Child protection policies",
          "Safety monitoring",
          "Awareness sessions",
        ],
        ar: ["سياسات حماية الطفل", "مراقبة السلامة", "جلسات التوعية"],
      },
      requirements: {
        en: "Social work + child protection training",
        ar: "عمل اجتماعي + تدريب حماية الطفل",
      },
      icon: <FaShieldAlt />,
      fullDetails: {
        en: {
          objective:
            "Ensuring child safety and implementing protection policies in all association programs",
          tasks: [
            "Developing and implementing child protection policies",
            "Monitoring safety and security measures in all activities",
            "Conducting awareness sessions on child protection",
            "Training staff on child protection protocols",
            "Investigating and reporting child protection concerns",
            "Ensuring compliance with child protection standards",
            "Developing safety protocols for all programs",
            "Coordinating with relevant authorities on child protection matters",
            "Providing psychological support to children in need",
            "Monitoring and evaluating child protection programs",
          ],
          qualifications:
            "Degree in social work, psychology, or related field with child protection training",
          experience: [
            "Experience in child protection programs",
            "Background in social work or psychology",
            "Training in child protection protocols and procedures",
          ],
          skills: [
            "Knowledge of child protection laws and regulations",
            "Crisis intervention and management",
            "Counseling and psychological support",
            "Risk assessment and management",
            "Training and facilitation skills",
          ],
          personalTraits: [
            "Empathy and compassion",
            "Professionalism and confidentiality",
            "Calm under pressure",
            "Strong ethical standards",
            "Excellent communication skills",
          ],
        },
        ar: {
          objective:
            "ضمان سلامة الطفل وتنفيذ سياسات الحماية في جميع برامج الجمعية",
          tasks: [
            "وضع وتنفيذ سياسات حماية الطفل",
            "مراقبة إجراءات السلامة والأمان في جميع الأنشطة",
            "إجراء جلسات توعية حول حماية الطفل",
            "تدريب الموظفين على بروتوكولات حماية الطفل",
            "التحقيق في مخاوف حماية الطفل والإبلاغ عنها",
            "ضمان الامتثال لمعايير حماية الطفل",
            "وضع بروتوكولات السلامة لجميع البرامج",
            "التنسيق مع الجهات المعنية في matters حماية الطفل",
            "تقديم الدعم النفسي للأطفال المحتاجين",
            "مراقبة وتقييم برامج حماية الطفل",
          ],
          qualifications:
            "شهادة في العمل الاجتماعي أو علم النفس أو مجال ذو صلة مع تدريب في حماية الطفل",
          experience: [
            "خبرة في برامج حماية الطفل",
            "خلفية في العمل الاجتماعي أو علم النفس",
            "تدريب في بروتوكولات وإجراءات حماية الطفل",
          ],
          skills: [
            "معرفة قوانين وأنظمة حماية الطفل",
            "التدخل في الأزمات وإدارتها",
            "الإرشاد والدعم النفسي",
            "تقييم المخاطر وإدارتها",
            "مهارات التدريب والتيسير",
          ],
          personalTraits: [
            "التعاطف والرحمة",
            "الاحترافية والسرية",
            "الهدوء تحت الضغط",
            "معايير أخلاقية قوية",
            "مهارات اتصال ممتازة",
          ],
        },
      },
    },
  ];

  // تأثير الظهور عند التمرير
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => [...prev, entry.target.dataset.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".position-card, .stat-card, .mv-card"
    );
    elements.forEach((el, index) => {
      el.dataset.id = index;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // مكون الفاصل الجديد
  const SectionDivider = ({ icon, type = "stats-team" }) => (
    <div className={`section-divider ${type}-divider`}>
      <div className="divider-line"></div>
      <div className="divider-icon">
        <i className="fas fa-ribbon"></i>
      </div>
      <div className="divider-line"></div>
    </div>
  );

  // Modal للتفاصيل الكاملة
  // Modal للتفاصيل الكاملة
const PositionModal = ({ position, onClose }) => {
  if (!position) return null;

  const details = position.fullDetails[language];

  return (
    <div className="position-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <div className="position-icon-large">{position.icon}</div>
          <h2>{position.title[language]}</h2>
          <p className="position-description-modal">
            {position.description[language]}
          </p>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>
              {language === "ar" ? "الهدف والغرض" : "Objective & Purpose"}
            </h3>
            <p>{details.objective}</p>
          </div>

          {details.description && (
            <div className="modal-section">
              <h3>{language === "ar" ? "الوصف" : "Description"}</h3>
              <p>{details.description}</p>
            </div>
          )}

          {/* المهام والمسؤوليات - شرط التحقق من وجودها */}
          {details.tasks && details.tasks.length > 0 && (
            <div className="modal-section">
              <h3>
                {language === "ar"
                  ? "المهام والمسؤوليات"
                  : "Tasks & Responsibilities"}
              </h3>
              <ul className="details-list">
                {details.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          )}

          {/* المؤهلات الدراسية - شرط التحقق من وجودها */}
          {details.qualifications && (
            <div className="modal-section">
              <h3>
                {language === "ar"
                  ? "المؤهلات الدراسية"
                  : "Educational Qualifications"}
              </h3>
              <p>{details.qualifications}</p>
            </div>
          )}

          {/* الخبرات - شرط التحقق من وجودها */}
          {details.experience && details.experience.length > 0 && (
            <div className="modal-section">
              <h3>{language === "ar" ? "الخبرات" : "Experience"}</h3>
              <ul className="details-list">
                {details.experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            </div>
          )}

          {/* المهارات - شرط التحقق من وجودها */}
          {details.skills && details.skills.length > 0 && (
            <div className="modal-section">
              <h3>{language === "ar" ? "المهارات" : "Skills"}</h3>
              <div className="skills-grid">
                {details.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* السمات الشخصية - شرط التحقق من وجودها */}
          {details.personalTraits && details.personalTraits.length > 0 && (
            <div className="modal-section">
              <h3>
                {language === "ar" ? "السمات الشخصية" : "Personal Traits"}
              </h3>
              <div className="traits-grid">
                {details.personalTraits.map((trait, index) => (
                  <span key={index} className="trait-tag">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="apply-btn">
            {language === "ar" ? "التقدم للوظيفة" : "Apply for Position"}
          </button>
        </div>
      </div>
    </div>
  );
};

  return (
    <section
      id="about"
      className="about-section"
      dir={language === "ar" ? "rtl" : "ltr"}
      ref={sectionRef}
    >
      <div className="container">
        {/* عنوان القسم */}
        <div className="section-header">
          <h2>{t.about.title}</h2>
          <p className="about-intro">
            {language === "ar"
              ? "تأسست جمعية أنيس سعادة الملائكية عام 2002 بهدف تخفيف المعاناة عن أسر الأطفال ذوي الاعاقة في المنطقة. نحن شركاء مع منظمة اليونيسف ونقدم خدمات متكاملة تشمل التعليم، العلاج الفيزيائي، والدعم النفسي."
              : "Anis Saade Angelic Association was established in 2002 to alleviate the suffering of families with children with disabilities in the region. We partner with UNICEF and provide integrated services including education, physical therapy, and psychological support."}
          </p>
        </div>

        {/* إحصائيات سريعة - محدثة */}
        


<div className="about-stats">
  {[
    {
      number: "22+",
      label: language === "ar" ? "سنة خدمة" : "Years of Service",
      icon: <FaCalendarAlt className="stat-icon" />,
    },
    {
      number: "10K+",
      label: language === "ar" ? "جلسة علاج" : "Therapy Sessions", 
      icon: <FaHandHoldingHeart className="stat-icon" />,
    },
    {
      number: "1,470+",
      label: language === "ar" ? "طفل مستفيد" : "Children Served",
      icon: <FaChild className="stat-icon" />,
    },
    {
      number: "8+", 
      label: language === "ar" ? "برنامج رئيسي" : "Major Programs",
      icon: <FaProjectDiagram className="stat-icon" />,
    },
  ].map((stat, index) => (
    <div
      key={index}
      className={`stat-card ${
        visibleElements.includes(index.toString()) ? "visible" : ""
      }`}
      data-id={index}
    >
      {stat.icon}
      <div className="stat-number-about">{stat.number}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  ))}
</div>

        {/* فاصل بين الإحصائيات والهيكل التنظيمي */}
        <SectionDivider type="stats-team" />

        {/* الهيكل التنظيمي والوظائف */}
        <div className="positions-section">
          <h3 className="section-subtitle">
            {language === "ar"
              ? "هيكلنا التنظيمي"
              : "Our Organizational Structure"}
          </h3>
          <p className="section-description">
            {language === "ar"
              ? "فريق متخصص من الكوادر المؤهلة يعملون معاً لتحقيق رسالتنا الإنسانية"
              : "A specialized team of qualified professionals working together to achieve our humanitarian mission"}
          </p>
          {/*  داخل الـ JSX، تأكد من أن بنية كل كرت متطابقة */}
          <div className="positions-grid">
            {jobPositions.map((position, index) => (
              <div
                key={position.id}
                className={`position-card ${
                  visibleElements.includes((index + 4).toString())
                    ? "visible"
                    : ""
                }`}
                data-id={index + 4}
              >
                <div className="position-header">
                  <div className="position-icon">{position.icon}</div>
                  <div className="position-title">
                    <h4>{position.title[language]}</h4>
                    <p className="position-description">
                      {position.description[language]}
                    </p>
                  </div>
                </div>

                <div className="position-content">
                  <div className="responsibilities">
                    <h5>
                      {language === "ar"
                        ? "المسؤوليات الرئيسية"
                        : "Key Responsibilities"}
                    </h5>
                    <ul>
                      {position.responsibilities[language].map(
                        (responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="requirements">
                    <h5>{language === "ar" ? "المتطلبات" : "Requirements"}</h5>
                    <p>{position.requirements[language]}</p>
                  </div>
                </div>

                <div className="position-footer">
                  <button
                    className="info-btn"
                    onClick={() => setSelectedPosition(position)}
                  >
                    {language === "ar"
                      ? "المزيد من المعلومات"
                      : "More Information"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* فاصل بين الهيكل التنظيمي والرؤية */}
        <SectionDivider type="stats-team" />

        {/* الرؤية والرسالة والقيم - محدثة حسب معلومات الجمعية */}
        <div className="mission-vision">
          {[
            {
              icon: <FaBullseye className="bull-icon" color="#ca4545"/>,
              title: language === "ar" ? "رؤيتنا" : "Our Vision",
              text:
                language === "ar"
                  ? "أن تكون جمعية أنيس سعادة الملائكية نموذجاً رائداً في تمكين الأشخاص ذوي الإعاقة والأطفال واليافعين، وتعزيز دمجهم الكامل في المجتمع"
                  : "To be a leading model in empowering persons with disabilities, children, and adolescents, fostering their full inclusion in society",
              type: "vision",
            },
            {
              icon: <FaLightbulb className="lumb-icon"/>,
              title: language === "ar" ? "رسالتنا" : "Our Mission",
              text:
                language === "ar"
                  ? "تحسين نوعية حياة الأطفال ذوي الإعاقة وأسرهم، وتوفير بيئة آمنة وداعمة عبر تقديم خدمات التعليم والعلاج الفيزيائي وبرامج المشاركة"
                  : "Enhancing the quality of life for children with disabilities and their families by providing education, physical therapy, and participation programs",
              type: "mission",
            },
            {
              icon: <FaRegStar className="star-icon"/>,
              title: language === "ar" ? "قيمنا" : "Our Values",
              text:
                language === "ar"
                  ? "الإنسانية، الشمولية، المسؤولية، التكافل المجتمعي، الاستدامة"
                  : "Humanity, Inclusivity, Responsibility, Community Solidarity, Sustainability",
              type: "values",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`mv-card ${item.type}-card ${
                visibleElements.includes((index + 10).toString())
                  ? "visible"
                  : ""
              }`}
              data-id={index + 10}
            >
              <div className="mv-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal للتفاصيل الكاملة */}
      <PositionModal
        position={selectedPosition}
        onClose={() => setSelectedPosition(null)}
      />
    </section>
  );
};

export default AboutSection;
