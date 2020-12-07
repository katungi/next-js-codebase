
export default function Cards({ src, title, description, price }) {
    return (
        <div class="flex p-6">
        <div class="flex-none w-44 relative">
          <img src={src} alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
        </div>
        <form class="flex-auto pl-6">
          <div class="flex flex-wrap items-baseline">
    <h1 class="w-full flex-none font-semibold mb-2.5">{title}</h1>
    <div class="text-4xl leading-7 font-bold text-pink-600">{price}</div>
            <div class="text-sm font-medium text-gray-400 ml-3">Available</div>
          </div>
          <div class="flex items-baseline my-8">
    <p class="text-sm text-gray-500">{description}</p>
          </div>
          <div class="flex space-x-3 mb-4 text-sm font-semibold">
            <div class="flex-auto flex space-x-3">
              <button class="w-1/2 flex items-center justify-center rounded-full bg-pink-700 text-white" type="submit">Book Now</button>
              <button class="w-1/2 flex items-center justify-center rounded-full bg-pink-50 text-pink-700" type="button">Add to Favorites</button>
            </div>
      
            <button class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-pink-50 text-pink-700" type="button" aria-label="like">
              <svg width="20" height="20" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    );
  }
  