/**
 * Design Tokens extracted from App Visiual Identity
 * Source of Truth for visual styles.
 */
export const designTokens = {
    colors: {
        primary: '#84cc16',   // Lime-500 (Green Apple)
        primaryHover: '#65a30d', // Lime-600
        secondary: '#3b82f6', // Blue-500 (Action/Link)
        success: '#22c55e',   // Green-500
        warning: '#f59e0b',   // Amber-500
        error: '#ef4444',     // Red-500

        background: '#f3f4f6', // Gray-100 (Page BG)
        surface: '#ffffff',    // White (Card BG)

        text: {
            main: '#1f2937',     // Gray-800
            secondary: '#6b7280', // Gray-500
            inverse: '#ffffff',
        },

        border: '#e5e7eb',     // Gray-200
    },

    typography: {
        fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
        size: {
            sm: '12px',
            base: '14px',
            lg: '16px',
            xl: '20px',
            xxl: '24px',
        },
        weight: {
            regular: 400,
            medium: 500,
            bold: 700,
        }
    },

    borderRadius: {
        sm: '6px',
        base: '12px', // App-like rounded corners
        lg: '16px',
        full: '9999px',
    },

    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    },

    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    }
};
