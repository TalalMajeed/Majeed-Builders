import Image from 'next/image';

export default function WhatsApp() {
  const phoneNumber = '923001234567'; // Replace with your actual WhatsApp number with country code
  const message = encodeURIComponent('Hello Majeed Builders, I would like to get a quote.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] transition-all duration-200 hover:brightness-90 active:scale-95"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative w-8 h-8">
        <Image
          src="/icons/whatsapp.png"
          alt="WhatsApp"
          fill
          className="object-contain"
        />
      </div>
    </a>
  );
}