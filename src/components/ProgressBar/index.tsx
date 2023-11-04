import { Bar } from 'react-native-progress'

type ProgressBarProps = {
  amount: number
  total: number
  color?: string
  height?: number
}

export function ProgressBar({
  amount = 0,
  total = 0,
  height,
  color,
}: ProgressBarProps) {
  function calculateProgress() {
    if (!amount || !total) return 0

    return amount / total
  }

  return (
    <Bar
      progress={calculateProgress()}
      width={null}
      height={height}
      color={color}
    />
  )
}
