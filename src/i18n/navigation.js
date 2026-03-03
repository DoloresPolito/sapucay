const { createNavigation } = require('next-intl/navigation');
const { routing } = require('./routing');

// Wrappers livianos sobre las APIs de navegación de Next.js
const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname
} = createNavigation(routing);

module.exports = {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname
};


