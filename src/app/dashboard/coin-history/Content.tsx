export default function Content() {
  return (
    <div className="pt-12">
      <div className="p-10 bg-gradient-to-b from-transparent to-white/5 rounded-xl">
        <div className="grid grid-cols-[100px_auto_200px_200px_200px]">
          <p className="text-xs uppercase text-white/50">Id</p>
          <p className="text-xs uppercase text-white/50">Tool</p>
          <p className="text-xs uppercase text-white/50">Coins used</p>
          <p className="text-xs uppercase text-white/50">Date</p>
          <p className="text-xs uppercase text-white/50">Actions</p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2.5">
          <svg
            width="64"
            height="41"
            viewBox="0 0 64 41"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-15"
          >
            <g transform="translate(0 1)" fill="none" fillRule="evenodd">
              <ellipse fill="#bbb" cx="32" cy="33" rx="32" ry="7"></ellipse>
              <g fillRule="nonzero" stroke="#fff">
                <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                <path
                  d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                  fill="#fff"
                ></path>
              </g>
            </g>
          </svg>

          <p className="text-sm font-light text-white/50">No data to show...</p>
        </div>
      </div>
    </div>
  );
}
