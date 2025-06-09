'use client'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from "@radix-ui/themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensures the component only renders client-side
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded"
        >
            Toggle Theme
        </Button>
    );
}
