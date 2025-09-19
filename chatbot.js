function toggleChatbox() {
  const popup = document.getElementById("chatPopup");
  popup.classList.toggle("hidden");
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chatMessages");

  const userMsg = document.createElement("p");
  userMsg.textContent = "🧑‍💬 " + message;
  chatBox.appendChild(userMsg);

  // Generate dynamic bot response based on message content
  const botResponse = generateBotResponse(message);
  const botMsg = document.createElement("p");
  botMsg.textContent = "🤖 " + botResponse;
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}

function generateBotResponse(message) {
  const lowerMessage = message.toLowerCase();

  // Keywords for different responses
  if (lowerMessage.includes("حجز") || lowerMessage.includes("booking") || lowerMessage.includes("احجز")) {
    return "للحجز، يرجى اختيار الوحدة المرغوبة من الصفحة الرئيسية واضغط على 'احجز الآن'. هل تحتاج مساعدة في اختيار وحدة؟";
  } else if (lowerMessage.includes("وحدة") || lowerMessage.includes("شقة") || lowerMessage.includes("units") || lowerMessage.includes("room")) {
    return "لدينا وحدات متنوعة متاحة. يمكنك تصفح الوحدات في الصفحة الرئيسية. هل تبحث عن نوع معين من الوحدات؟";
  } else if (lowerMessage.includes("خدمات") || lowerMessage.includes("services")) {
    return "نقدم خدمات شاملة تشمل التنظيف اليومي، واي فاي مجاني، مواقف سيارات، مطبخ مجهز، توصيل طعام، وأمن على مدار 24 ساعة. هل تحتاج تفاصيل إضافية؟";
  } else if (lowerMessage.includes("تواصل") || lowerMessage.includes("contact") || lowerMessage.includes("هاتف")) {
    return "يمكنك التواصل معنا عبر الهاتف: 0501234567 أو البريد الإلكتروني: info@manazelrimal.com. كما يمكنك الاتصال عبر واتساب مباشرة.";
  } else if (lowerMessage.includes("موقع") || lowerMessage.includes("location") || lowerMessage.includes("عنوان")) {
    return "موقعنا في شارع الرمال - المدينة المنورة. يمكنك العثور على خريطة تفصيلية في قسم الموقع على الصفحة.";
  } else if (lowerMessage.includes("مرحبا") || lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "مرحبا بك في منازل الرمال! كيف يمكنني مساعدتك اليوم؟";
  } else if (lowerMessage.includes("تأكيد") || lowerMessage.includes("confirmation")) {
    return "تم تأكيد الحجز بنجاح! يرجى تحويل المبلغ إلى IBAN: SA4780000321608010550996 أو رقم الحساب: 321608010550996. سنتواصل معك قريبا.";
  } else if (lowerMessage.includes("دفع") || lowerMessage.includes("payment")) {
    return "للدفع، قم بتحويل المبلغ إلى IBAN: SA4780000321608010550996 أو رقم الحساب: 321608010550996. يمكنك نسخ الرقم بالضغط على زر النسخ في صفحة الشكر.";
  } else if (lowerMessage.includes("شكر") || lowerMessage.includes("thank")) {
    return "العفو! تم تأكيد حجزك. إذا كان لديك أي أسئلة أخرى، فأنا هنا للمساعدة.";
  } else {
    return "شكرا لرسالتك. إذا كان لديك أسئلة حول الحجز، الوحدات، أو الخدمات، فأخبرني وسأساعدك.";
  }
}
