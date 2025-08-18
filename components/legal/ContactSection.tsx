export default function ContactSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Jabin International Private Limited</h3>
        <div className="space-y-2 text-gray-700">
          <p>32A Yashoda Nagar Chauraha</p>
          <p>Fzd Road Chinhat, Malhaur</p>
          <p>Lucknow, Uttar Pradesh – 226028, India</p>
          <p>CIN: U63122UP2024PTC202046</p>
          <p>Phone: +91 7523944939</p>
          <p>Email: info@jabin.org</p>
          <div className="mt-4">
            <p className="font-medium text-gray-900">Our Services:</p>
            <p className="text-sm">• Digital Solutions - <a href="https://web.jabin.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">web.jabin.org</a></p>
            <p className="text-sm">• Creative Products - <a href="https://store.jabin.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">store.jabin.org</a></p>
            <p className="text-sm">• Consultancy & Training Services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
