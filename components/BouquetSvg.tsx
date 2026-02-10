export default function BouquetSvg({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Wrapper paper */}
            <path
                d="M40 120 L100 240 L160 120 Z"
                fill="#fcd5ce"
                stroke="#f8edeb"
                strokeWidth="2"
            />
            <path
                d="M40 120 Q100 140 160 120"
                fill="#fcd5ce"
                stroke="#f8edeb"
                strokeWidth="2"
            />

            {/* Stems */}
            <path d="M100 180 L80 100" stroke="#4a7c59" strokeWidth="3" />
            <path d="M100 180 L120 100" stroke="#4a7c59" strokeWidth="3" />
            <path d="M100 180 L100 90" stroke="#4a7c59" strokeWidth="3" />

            {/* Main Rose */}
            <circle cx="100" cy="90" r="25" fill="#e63946" />
            <path
                d="M100 90 m-15 0 a 15 15 0 1 0 30 0 a 15 15 0 1 0 -30 0"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                opacity="0.3"
            />

            {/* Left Rose */}
            <circle cx="70" cy="110" r="20" fill="#ff4d6d" />
            <path
                d="M70 110 m-12 0 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                opacity="0.3"
            />

            {/* Right Rose */}
            <circle cx="130" cy="110" r="20" fill="#ff4d6d" />
            <path
                d="M130 110 m-12 0 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
                opacity="0.3"
            />

            {/* Small filler flowers */}
            <circle cx="85" cy="80" r="8" fill="#fff" />
            <circle cx="115" cy="80" r="8" fill="#fff" />

            {/* Leaves */}
            <path d="M60 140 Q40 130 50 110" fill="none" stroke="#4a7c59" strokeWidth="2" />
            <path d="M140 140 Q160 130 150 110" fill="none" stroke="#4a7c59" strokeWidth="2" />

        </svg>
    );
}
