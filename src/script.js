        // --- 1. MOCK DATA GENERATION ---
        // Generates random images with different aspect ratios to test Masonry layout
        // const mockPhotos = Array.from({ length: 30 }).map((_, i) => {
        //     const width = 600;
        //     const height = Math.floor(Math.random() * (900 - 400 + 1)) + 400; // Random height between 400-900
        //     return {
        //         id: i,
        //         url: `https://picsum.photos/${width}/${height}?random=${i}`,
        //         title: [
        //             "Thiết kế nội thất phòng khách", 
        //             "Minimalist Style", 
        //             "Chụp ảnh chân dung nghệ thuật",
        //             "Món ăn đường phố ngon tuyệt",
        //             "Phong cảnh thiên nhiên hùng vĩ",
        //             "Outfit mùa hè năng động"
        //         ][Math.floor(Math.random() * 6)],
        //         user: {
        //             name: ["Linh Chi", "Minh Tuấn", "Design Daily", "Food Blog", "Traveler"][Math.floor(Math.random() * 5)],
        //             avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`
        //         }
        //     };
        // });

        // --- 2. RENDER COMPONENT ---
        const gridContainer = document.getElementById('masonry-grid');

        function createCard(photo) {
            const card = document.createElement('div');
            // 'break-inside-avoid' is crucial for Masonry columns to prevent cutting cards
            card.className = "relative group mb-4 break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden";
            
            card.innerHTML = `
                <!-- Image -->
                <img src="${photo.url}" alt="${photo.title}" loading="lazy" 
                    class="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                >
                
                <!-- Desktop Hover Overlay -->
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col justify-between p-4">
                    <div class="flex justify-end">
                        <button class="bg-brand-red text-white px-5 py-3 rounded-pill font-bold text-sm hover:bg-red-700 transition shadow-lg transform hover:scale-105" onclick="event.stopPropagation()">Lưu</button>
                    </div>
                    <div class="flex justify-end gap-2">
                        <button class="bg-white/90 p-2 rounded-full hover:bg-white text-black transition shadow-md" onclick="event.stopPropagation()">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        </button>
                        <button class="bg-white/90 p-2 rounded-full hover:bg-white text-black transition shadow-md" onclick="event.stopPropagation()">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Info (Always Visible below or simple overlay) -->
                <div class="md:hidden absolute bottom-2 right-2">
                     <button class="bg-white/80 p-1.5 rounded-full shadow-sm"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/></svg></button>
                </div>
            `;

            // Click Event to Open Modal
            card.addEventListener('click', () => openModal(photo));

            return card;
        }

        // --- 3. INITIALIZATION ---
        function renderFeed() {
            fetch('/image-list').then(r => r.json()).then(photos => {
                photos.forEach(photo => {
                    gridContainer.appendChild(createCard(photo));
                });
            });
            // mockPhotos.forEach(photo => {
            //     gridContainer.appendChild(createCard(photo));
            // });
        }

        // --- 4. MODAL LOGIC ---
        const modal = document.getElementById('detail-modal');
        const modalImg = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalUser = document.getElementById('modal-user');
        const modalAvatar = document.getElementById('modal-avatar');
        // New Create Modal Elements
        const createModal = document.getElementById('create-modal');
        const uploadPreview = document.getElementById('upload-preview');
        const uploadPlaceholder = document.getElementById('upload-placeholder');
        const removeUploadBtn = document.getElementById('remove-upload');
        const detailBackdrop = document.getElementById('detail-backdrop');
        detailBackdrop.addEventListener('click', () => { closeModal() });
        let currentUploadedFile = null;

        function openModal(photo) {
            fetch("/image/"+photo.id).then(r => r.json()).then(data => {
                modalImg.src = data.data.url_list[0]; // Load highest resolution
            })
            // modalImg.src = photo.url;
            modalTitle.textContent = photo.title;
            modalUser.textContent = photo.user.name;
            modalAvatar.src = photo.user.avatar;
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal() {
            modalImg.src = '';
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        // --- 5. CREATE MODAL LOGIC (NEW) ---
        function openCreateModal() {
            createModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            // Reset form
            document.getElementById('create-title').value = '';
            document.getElementById('create-desc').value = '';
            document.getElementById('create-link').value = '';
            removeUpload();
        }

        function closeCreateModal() {
            createModal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        function handleFileSelect(event) {
            const file = event.target.files[0];
            if (file) {
                currentUploadedFile = file;
                const reader = new FileReader();
                reader.onload = function(e) {
                    uploadPreview.src = e.target.result;
                    uploadPreview.classList.remove('hidden');
                    removeUploadBtn.classList.remove('hidden');
                    uploadPlaceholder.classList.add('hidden');
                }
                reader.readAsDataURL(file);
            }
        }

        function removeUpload() {
            currentUploadedFile = null;
            document.getElementById('file-upload').value = '';
            uploadPreview.src = '';
            uploadPreview.classList.add('hidden');
            removeUploadBtn.classList.add('hidden');
            uploadPlaceholder.classList.remove('hidden');
        }

        function handleCreateSubmit() {
            const title = document.getElementById('create-title').value;
            const desc = document.getElementById('create-desc').value;
            
            // Simple validation
            if (!title) {
                alert("Vui lòng nhập tiêu đề cho Ghim của bạn");
                return;
            }
            if (!currentUploadedFile && !uploadPreview.src) {
                alert("Vui lòng chọn một hình ảnh");
                return;
            }

            // Create new photo object
            const newPhoto = {
                id: Date.now(), // Unique ID
                // Use uploaded image or a placeholder if testing without file (using the preview src)
                url: uploadPreview.src || `https://picsum.photos/600/800`, 
                title: title,
                user: {
                    name: "Felix", // Current User
                    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                }
            };

            // Add to data array (at the beginning)
            mockPhotos.unshift(newPhoto);

            // Re-render Masonry Grid
            gridContainer.innerHTML = '';
            renderFeed();

            // Close modal & Show success feedback
            closeCreateModal();
            
            // Optional: Scroll to top to see new pin
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Run
        renderFeed();

        // Close modal on Esc key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
