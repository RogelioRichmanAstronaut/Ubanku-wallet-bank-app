export function formatNumberCO(value: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(Math.abs(value));
}
