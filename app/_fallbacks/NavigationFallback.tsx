function NavigationFallback() {
  return (
    <span
      className="block h-5 w-24 animate-pulse rounded-full bg-primary-700 shadow-[0_0_12px_theme(colors.primary.500)]"
      aria-label="Loading guest area"
      aria-busy="true"
    />
  );
}

export default NavigationFallback;
