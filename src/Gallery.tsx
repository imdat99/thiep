const Gallery = () => {
  return (
    <>
      {/* HEADER (Sticky) */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 py-4 px-4 shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex-shrink-0 text-brand-red hover:bg-gray-100 p-2 rounded-full transition"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.992 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.65 0-5.789 2.738-5.789 5.57 0 1.104.425 2.286.956 2.929.105.128.12.24.089.372-.098.403-.316 1.292-.358 1.472-.057.241-.19.292-.437.177-1.636-.762-2.659-3.15-2.659-5.071 0-4.128 3.003-7.915 8.665-7.915 4.548 0 8.082 3.242 8.082 7.575 0 4.522-2.849 8.163-6.802 8.163-1.328 0-2.578-.691-3.006-1.507 0 0-.658 2.505-.818 3.118-.295 1.133-1.087 2.535-1.616 3.402.949.28 1.954.43 2.992.43 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
          </a>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <button className="bg-black text-white px-5 py-3 rounded-pill font-semibold text-sm hover:opacity-90 transition">
              Trang chủ
            </button>
            <button
              onclick="openCreateModal()"
              className="bg-white text-black px-5 py-3 rounded-pill font-semibold text-sm hover:bg-gray-100 transition"
            >
              Tạo mới
            </button>
          </div>
          {/* Search Bar (Responsive) */}
          <div className="flex-grow relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm ý tưởng..."
              className="w-full bg-gray-100 hover:bg-gray-200 focus:bg-white border-none rounded-pill py-3 pl-10 pr-4 text-base transition outline-none ring-4 ring-transparent focus:ring-blue-100 text-gray-800 placeholder-gray-500"
            />
          </div>
          {/* Right Icons */}
          <div className="flex items-center gap-2 text-gray-600">
            <button className="p-3 rounded-full hover:bg-gray-100 relative hidden sm:block">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
              </svg>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-brand-red rounded-full border-2 border-white" />
            </button>
            <button className="p-3 rounded-full hover:bg-gray-100 hidden sm:block">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden hover:opacity-80 transition ml-1">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="User"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </header>
      {/* MAIN CONTENT: Masonry Layout */}
      <main className="pt-24 px-2 md:px-4 pb-20">
        {/* 
      Breakpoints & Columns logic based on JSON:
      mobile (<480): columns-2
      tablet (768): columns-3
      laptop (1024): columns-4
      desktop (1440): columns-5
  */}
        <div
          id="masonry-grid"
          className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4 mx-auto max-w-[1800px]"
        >
          {/* JS will inject Photo Cards here */}
        </div>
        {/* Loading Spinner */}
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      </main>
      {/* MOBILE BOTTOM NAV (Visible only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-3 px-6 flex justify-between items-center z-40">
        <button className="text-black">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </button>
        {/* Changed Search to Create (+) Button for Mobile */}
        <button
          onclick="openCreateModal()"
          className="text-black bg-gray-100 p-2 rounded-full hover:bg-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-black">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
        <button className="w-7 h-7 rounded-full overflow-hidden border border-gray-300">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="User"
          />
        </button>
      </div>
      {/* CREATE MODAL (NEW) */}
      <div
        id="create-modal"
        className="fixed inset-0 z-[70] hidden"
        aria-labelledby="create-modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-60 transition-opacity backdrop-blur-sm"
          onclick="closeCreateModal()"
        />
        {/* Create Panel */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-0 md:p-4 text-center sm:p-0">
            <div className="relative transform bg-white text-left shadow-xl transition-all w-full min-h-screen md:min-h-0 md:w-[880px] md:h-[600px] md:rounded-[32px] overflow-hidden modal-animate flex flex-col md:flex-row">
              {/* Mobile Header for Create */}
              <div className="md:hidden flex justify-between items-center p-4 border-b">
                <button onclick="closeCreateModal()" className="p-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h2 className="font-bold text-lg">Tạo Ghim</h2>
                <button
                  onclick="handleCreateSubmit()"
                  className="text-brand-red font-bold"
                >
                  Đăng
                </button>
              </div>
              {/* Left Column: Upload Area */}
              <div className="w-full md:w-[40%] bg-gray-50 p-6 flex items-center justify-center border-r border-gray-100">
                <div
                  className="w-full h-full border-2 border-dashed border-gray-300 rounded-[24px] bg-gray-100 relative flex flex-col items-center justify-center text-center p-4 hover:bg-gray-200 transition cursor-pointer group"
                  onclick="document.getElementById('file-upload').click()"
                >
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept="image/*"
                    onchange="handleFileSelect(event)"
                  />
                  {/* Placeholder State */}
                  <div
                    id="upload-placeholder"
                    className="flex flex-col items-center"
                  >
                    <div className="bg-gray-600 text-white rounded-full p-3 mb-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">
                      Kéo thả hoặc nhấp để tải lên
                    </p>
                    <p className="text-xs text-gray-500 mt-2 px-4">
                      Khuyên dùng tập tin .jpg chất lượng cao dưới 20MB
                    </p>
                  </div>
                  {/* Preview State */}
                  <img
                    id="upload-preview"
                    src=""
                    className="hidden absolute inset-0 w-full h-full object-cover rounded-[22px]"
                  />
                  <button
                    id="remove-upload"
                    onclick="event.stopPropagation(); removeUpload()"
                    className="hidden absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Right Column: Form */}
              <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col overflow-y-auto">
                <div className="hidden md:flex justify-end mb-4">
                  <button
                    onclick="handleCreateSubmit()"
                    className="bg-brand-red text-white px-6 py-3 rounded-pill font-bold hover:bg-red-700 transition"
                  >
                    Đăng
                  </button>
                </div>
                <div className="space-y-6 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tiêu đề
                    </label>
                    <input
                      type="text"
                      id="create-title"
                      placeholder="Thêm tiêu đề"
                      className="w-full text-3xl font-bold border-b-2 border-gray-200 focus:border-blue-500 outline-none py-2 placeholder-gray-400 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mô tả
                    </label>
                    <textarea
                      id="create-desc"
                      rows={3}
                      placeholder="Mọi người sẽ nhìn thấy gì trong Ghim của bạn?"
                      className="w-full text-base border-b border-gray-200 focus:border-blue-500 outline-none py-2 placeholder-gray-400 resize-none transition"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Liên kết đích
                    </label>
                    <input
                      type="text"
                      id="create-link"
                      placeholder="Thêm liên kết đích"
                      className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>
                  {/* User Preview in Form */}
                  <div className="flex items-center gap-3 pt-4">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                      className="w-10 h-10 rounded-full bg-gray-200"
                    />
                    <span className="font-semibold text-sm">Felix (Bạn)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DETAIL MODAL */}
      <div
        id="detail-modal"
        className="fixed inset-0 z-[60] hidden"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-60 transition-opacity backdrop-blur-sm cursor-zoom-out"
        //   onclick="closeModal()"
            id="detail-backdrop"
        />
        {/* Modal Panel */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-0 md:p-4 text-center sm:p-0">
            {/* Back Button (Mobile) */}
            <button
              className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-lg"
              onclick="closeModal()"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="relative transform bg-white text-left shadow-xl transition-all w-full min-h-screen md:min-h-0 md:w-auto md:max-w-[1000px] md:rounded-[32px] overflow-hidden modal-animate flex flex-col md:flex-row">
              {/* Left Column: Image */}
              <div className="w-full md:w-[55%] bg-black flex items-center justify-center relative group">
                <img
                  id="modal-image"
                  src=""
                  alt="Detail"
                  className="w-full h-auto max-h-[85vh] object-contain md:object-cover"
                />
              </div>
              {/* Right Column: Info */}
              <div className="w-full md:w-[45%] p-6 md:p-8 flex flex-col max-h-[85vh] overflow-y-auto">
                {/* Header Actions */}
                <div className="flex justify-between items-center mb-6 sticky top-0 bg-white pb-2 z-10">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-brand-red text-white px-6 py-3 rounded-pill font-bold text-base hover:bg-red-700 transition shadow-sm">
                    Lưu
                  </button>
                </div>
                {/* Content */}
                <div className="mb-6">
                  <h2
                    id="modal-title"
                    className="text-2xl md:text-3xl font-semibold mb-2 leading-tight"
                  >
                    Title Placeholder
                  </h2>
                  <p
                    id="modal-desc"
                    className="text-gray-600 text-sm md:text-base"
                  >
                    Mô tả chi tiết về bức ảnh này. Nó mang phong cách minimalist
                    và hiện đại.
                  </p>
                </div>
                {/* User Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      id="modal-avatar"
                      src=""
                      className="w-10 h-10 rounded-full bg-gray-200 object-cover"
                    />
                    <div>
                      <p id="modal-user" className="font-semibold text-sm">
                        User Name
                      </p>
                      <p className="text-xs text-gray-500">
                        2.1M người theo dõi
                      </p>
                    </div>
                  </div>
                  <button className="bg-gray-100 text-black px-4 py-2 rounded-pill font-semibold text-sm hover:bg-gray-200">
                    Theo dõi
                  </button>
                </div>
                {/* Comments Section (Mock) */}
                <div className="border-t pt-4 mt-auto">
                  <h3 className="font-semibold text-lg mb-4">Nhận xét</h3>
                  <div className="space-y-4 mb-20 md:mb-0">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          <span className="font-semibold">Alice</span> Ảnh tuyệt
                          quá! 😍
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          2 ngày trước
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex-shrink-0" />
                      <div>
                        <p className="text-sm">
                          <span className="font-semibold">Bob</span> Tôi có thể
                          tải ảnh này ở đâu?
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          5 giờ trước
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fixed Bottom Comment Input */}
                <div className="sticky bottom-0 bg-white pt-2 flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex-grow bg-gray-100 rounded-full flex items-center px-4 py-3">
                    <input
                      type="text"
                      placeholder="Thêm nhận xét..."
                      className="bg-transparent w-full outline-none text-sm placeholder-gray-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="/src/script.js"></script>
    </>
  );
};

export default Gallery;