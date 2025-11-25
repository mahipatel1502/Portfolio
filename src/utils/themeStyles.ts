export const getThemeClasses = (isDark: boolean) => ({
  bg: {
    primary: isDark ? 'bg-slate-800/50' : 'bg-white/80',
    secondary: isDark ? 'bg-slate-800/30' : 'bg-gray-50',
    hover: isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100',
  },
  text: {
    primary: isDark ? 'text-white' : 'text-slate-900',
    secondary: isDark ? 'text-gray-300' : 'text-slate-600',
    tertiary: isDark ? 'text-gray-400' : 'text-slate-500',
  },
  border: {
    primary: isDark ? 'border-slate-700' : 'border-gray-200',
    hover: isDark ? 'hover:border-cyan-500/50' : 'hover:border-cyan-400/50',
  },
  card: {
    bg: isDark ? 'bg-slate-800/50 backdrop-blur-sm' : 'bg-white/50 backdrop-blur-sm',
    border: isDark ? 'border-slate-700' : 'border-gray-200',
    hover: isDark
      ? 'hover:shadow-lg hover:shadow-cyan-500/20'
      : 'hover:shadow-lg hover:shadow-cyan-400/20',
  },
  input: {
    bg: isDark ? 'bg-slate-700/50' : 'bg-gray-100',
    border: isDark ? 'border-slate-600' : 'border-gray-300',
    text: isDark ? 'text-white' : 'text-slate-900',
    focus: isDark ? 'focus:border-cyan-400' : 'focus:border-cyan-400',
  },
});
