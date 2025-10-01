import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
};

export default function Testimonial({
  name,
  role,
  quote,
  rating = 4,
  avatarUrl,
}: Props) {
  return (
    <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4 py-6 flex flex-col items-center text-center font-nunito bg-white dark:bg-slate-900 rounded-xl shadow-md transition-all duration-300">
      {/* Avatar */ }
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl flex-shrink-0">
        { avatarUrl ? (
          <Image
            src={ avatarUrl }
            alt={ name }
            width={ 96 }
            height={ 96 }
            className="w-full h-full object-cover"
          />
        ) : (
          name.charAt(0)
        ) }
      </div>

      {/* Name & Role */ }
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white font-montserrat">
        { name }
      </h3>
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-poppins mb-2">
        { role }
      </p>

      {/* Quote */ }
      <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">
        “{ quote }”
      </p>

      {/* Star Rating */ }
      <div className="flex gap-1">
        { [...Array(5)].map((_, i) => (
          <FaStar
            key={ i }
            className={ `text-yellow-400 ${i < rating ? 'opacity-100' : 'opacity-30'}` }
          />
        )) }
      </div>
    </div>
  );
}
