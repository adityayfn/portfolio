export const extractHexColor = (bgClassName: string): string | null => {
  const match = bgClassName.match(/\[#[A-Fa-f0-9]{6}\]/)
  return match?.[0].substring(1, 8) ?? null
}
