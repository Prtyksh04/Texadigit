import styles from '../components/css/RippleDemo.module.css'

export function RippleDemo() {
  return (
    <div className={`relative flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-full bg-white shadow-lg transition-transform transform hover:scale-110 cursor-pointer ${styles.pulse}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="z-6 text-pink-600 h-10 w-10"
        viewBox="0 0 20 20"
        fill="currentColor"
        style={{ transform: 'scale(-1, 1) translateX(4px)' }}
      >
        <path d="M10 3.5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.8.4l-6-6a.5.5 0 0 1 0-.8l6-6a.5.5 0 0 1 .3-.1z" />
      </svg>
    </div>
  );
}
