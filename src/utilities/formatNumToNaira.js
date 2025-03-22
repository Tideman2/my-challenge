export default function (num) {
  return `NGN ${new Intl.NumberFormat().format(num)}`
}