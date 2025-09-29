import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
};

export default function Testimonial({ name, role, quote, rating = 4, avatarUrl }: Props) {
  return (
    <div className="flex flex-col items-center text-center font-nunito">
      {/* Avatar */ }
      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-white font-bold text-xl">
        { avatarUrl ? (
          <Image
            src={ avatarUrl }
            alt={ name }
            width={ 64 }
            height={ 64 }
            className="w-full h-full object-cover"
          />
        ) : (
          name.charAt(0)
        ) }
      </div>

      {/* Name & Role */ }
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white font-montserrat">{ name }</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-poppins mb-2">{ role }</p>

      {/* Quote */ }
      <p className="text-sm text-gray-700 dark:text-gray-300 italic mb-4">“{ quote }”</p>

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
