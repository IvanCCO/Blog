export default function ArrowPosts() {
  return (
    <div className="flex flex-row items-center space-x-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="30" viewBox="0 0 185 30" fill="none">
        <path d="M184.414 16.4142C185.195 15.6332 185.195 14.3668 184.414 13.5858L171.686 0.857864C170.905 0.0768156 169.639 0.0768156 168.858 0.857864C168.077 1.63891 168.077 2.90524 168.858 3.68629L180.172 15L168.858 26.3137C168.077 27.0948 168.077 28.3611 168.858 29.1421C169.639 29.9232 170.905 29.9232 171.686 29.1421L184.414 16.4142ZM0 17L183 17V13L0 13L0 17Z" fill="#AB9ADD" />
      </svg>
      <p className="text-purple-soft text-2xl cursor-pointer font-inter font-bold">My Posts</p>
    </div>
  );
}
