import AnalyticsModule from "./modules/analytics.js";
import BlacklistModule from "./modules/blacklist.js";
import BlogPostsModule from "./modules/blog_posts.js";
import CheckoutModule from "./modules/checkout.js";
import CouponsModule from "./modules/coupons.js";
import CryptoWalletModule from "./modules/crypto_wallet.js";
import CustomFieldsModule from "./modules/custom_fields.js";
import CustomersModule from "./modules/customers.js";
import DomainsModule from "./modules/domains.js";
import FeedbacksModule from "./modules/feedbacks.js";
import GroupsModule from "./modules/groups.js";
import ImagesModule from "./modules/images.js";
import InvoicesModule from "./modules/invoices.js";
import NotificationsModule from "./modules/notifications.js";
import PaymentMethodsModule from "./modules/payment_methods.js";
import ProductsModule from "./modules/products.js";
import ShopsModule from "./modules/shops.js";
import TicketsModule from "./modules/tickets.js";

export const exports = {
  analytics: AnalyticsModule,
  blacklist: BlacklistModule,
  blog_posts: BlogPostsModule,
  checkout: CheckoutModule,
  coupons: CouponsModule,
  crypto_wallet: CryptoWalletModule,
  custom_fields: CustomFieldsModule,
  customers: CustomersModule,
  domains: DomainsModule,
  feedbacks: FeedbacksModule,
  groups: GroupsModule,
  images: ImagesModule,
  invoices: InvoicesModule,
  notifications: NotificationsModule,
  payment_methods: PaymentMethodsModule,
  products: ProductsModule,
  shops: ShopsModule,
  tickets: TicketsModule
};
