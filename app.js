// Script Goes Here...
const leftSlide = document.querySelector(".left-slides");
const rightSlide = document.querySelector(".right-slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slidesLength = leftSlide.querySelectorAll("div").length;

let currentSlide = 0;

rightSlide.style.transform = `translateY(-${(slidesLength - 1) * 100}%)`;

leftBtn.addEventListener("click", () => changeSlide("left"));
rightBtn.addEventListener("click", () => changeSlide("right"));

function changeSlide(btn) {
  if (btn == "right") {
    currentSlide++;

    if (currentSlide > slidesLength - 1) {
      currentSlide = 0;
    }
  } else if (btn == "left") {
    currentSlide--;

    if (currentSlide < 0) {
      currentSlide = slidesLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${
    (slidesLength - 1 - currentSlide) * 100
  }%)`;
  leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}

setInterval(autoChangeSlide, 3000);

function autoChangeSlide() {

  currentSlide++;

  if (currentSlide > slidesLength - 1) {
    currentSlide = 0;
  }

  rightSlide.style.transform = `translateY(-${
    (slidesLength - 1 - currentSlide) * 100
  }%)`;
  leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}
document.getElementById('arabi').onclick = 
function changer(){console.log("arabi");
document.querySelector(".info").innerHTML = "هل ترغب في بيع ملابس نسائية بأرخص وأحدث صيحات الموضة بالجملة عبر الإنترنت في الولايات المتحدة الأمريكية أو أوروبا أو أكثر من 100 دولة أخرى؟ سواء كنت متجرًا بوتيكًا أو تاجر تجزئة عبر الإنترنت ، من الأنماط الكلاسيكية إلى العصرية ، من الأعمال الرسمية إلى الأنماط غير الرسمية ، فإن FashionTIY سيكون لديها أكثر من 50000 من أنماط الملابس النسائية الفريدة والعصرية لتكون خيارك الأول للشراء بالجملة! كأفضل بائع ، نقوم بالجملة بأحدث الملابس النسائية الأنيقة المناسبة لأي موسم أو مناسبة. عندما يتعلق الأمر بالصيف ، ما هو أكثر ما يتم الحديث عنه في سوق الملابس النسائية؟ ملابس السباحة مثير لا غنى عنها. البيكينيات ، البيكينيات ، وحتى ملابس السباحة ذات المقاسات الكبيرة ، كلها متاحة على مواقعنا الإلكترونية. جميع التحديثات اليومية لملابس البحر وملابس السباحة والأنماط والألوان والأحجام الشائعة سترضي عملك. فستان مزخرف بالزهور أو فستان القميص مناسب أيضًا لشغف الصيف. إذا كان عميلك بحاجة إلى حضور مناسبة خاصة ، فقدم له فستان سهرة أنيقًا أو فستان حفلة أنيق. بالإضافة إلى ذلك ، تحظى الملابس النسائية غير الرسمية بشعبية كبيرة أيضًا. يمكنك بيع أحدث الأنماط في كل من بلوزات Puffy Sleeve النسائية ، وبلوزات Business Boutique ، والقميص المطبوع ، والصدرية أو الشورتات الرياضية النسائية من القماش الشفاف ، FashionTIY و NO MOQ. كما نقدم خيارات متنوعة لاتجاهات ملابس الأمومة والأحجام الكبيرة ومنتجات موسم الشتاء. ستعمل القمصان والسراويل النسائية ذات الحجم الزائد وسراويل الأمومة على تحديث مجموعة منتجات البيع بالتجزئة الخاصة بك. الدنيم بالجملة لا يمكن أن تفوت أيضا. سواء كنت تبحث عن بنطلون جينز أو شورت لطيف من الدنيم ، أو بدلات دينيم مثيرة أو فساتين وسترات مستوحاة من راعية البقر ، فمن المؤكد أن مجموعتنا الرائعة ستحصل على ما تبحث عنه بالجملة. من خلال التعاون مع الشركات المصنعة الممتازة ، تعد FashionTIY أفضل مورد بأفضل جودة واتجاهات بأرخص الأسعار ، وهم الموزعون الوحيدون لبيع الملابس النسائية بالجملة. سنتخذ رقابة أكثر صرامة على الجودة ، والتعبئة الماهرة ، والشحن السريع وخدمة العملاء في الوقت المناسب لضمان جودة الخدمة لأعمال بيع الملابس النسائية بالجملة";
document.querySelector("#hemen").innerHTML = "خذ. فورا";
document.querySelector("#hemen1").innerHTML = "خذ. فورا";}

