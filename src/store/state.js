let city = '北京'
try {
  if (localStorage.city) {
    city = localStorage.city
  }
} catch (error) {}

export default {
  city
}
