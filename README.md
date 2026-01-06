# JSellAuth

**JSellAuth** is a JavaScript (Node.js) wrapper for the [SellAuth API](https://sellauth.com), allowing developers to manage shops, products, payments, customers, tickets, feedbacks, and more directly from JavaScript.

## Features

- Full access to SellAuth API through JavaScript.
- Supports all modules including Shops, Products, Customers, Tickets, Feedbacks, Payments, Analytics, and more.
- Promise-based methods for easy async/await usage.
- Easy authentication using your API token.

## Installation

```bash
npm install jssellauth
# or
yarn add jssellauth
````

## Initialization

```javascript
import SellAuthClient from 'jssellauth';

// Initialize the client with your API token
const client = new SellAuthClient({ apiKey: 'YOUR_API_KEY_HERE' });
```

## Modules Overview

### Analytics

```javascript
await client.analytics.get(shopId);
await client.analytics.graph(shopId);
await client.analytics.topProducts(shopId);
await client.analytics.topCustomers(shopId);
```

### Blacklist

```javascript
await client.blacklist.list(shopId);
await client.blacklist.create(shopId, { value, type, match_type, reason });
await client.blacklist.get(shopId, blacklistId);
await client.blacklist.update(shopId, blacklistId, { value, type, match_type, reason });
await client.blacklist.delete(shopId, blacklistId);
```

### Blog Posts

```javascript
await client.blogPosts.list(shopId, { page, perPage, title });
await client.blogPosts.create(shopId, { title, content, path, summary });
await client.blogPosts.update(shopId, postId, { title, content });
await client.blogPosts.delete(shopId, postId);
```

### Checkout

```javascript
await client.checkout.create(shopId, {
  cart,
  ip,
  country_code,
  email,
  coupon,
  gateway,
  newsletter
});
```

### Coupons

```javascript
await client.coupons.list(shopId);
await client.coupons.create(shopId, { code, global, discount, type });
await client.coupons.update(shopId, couponId, { code, discount });
await client.coupons.delete(shopId, couponId);
await client.coupons.deleteUsed(shopId);
```

### Crypto Wallet

```javascript
await client.cryptoWallet.payouts(shopId);
await client.cryptoWallet.balances(shopId);
await client.cryptoWallet.payout(shopId, currency, address, amount);
await client.cryptoWallet.transactions(shopId);
```

### Custom Fields

```javascript
await client.customFields.list(shopId);
await client.customFields.create(shopId, { name, type, placeholder });
await client.customFields.update(shopId, fieldId, { name, type });
await client.customFields.delete(shopId, fieldId);
```

### Customers

```javascript
await client.customers.list(shopId, { page, perPage, email });
await client.customers.editBalance(shopId, customerId, amount, description);
```

### Domains

```javascript
await client.domains.list(shopId);
await client.domains.create(shopId, domainName);
await client.domains.get(shopId, domainId);
await client.domains.delete(shopId, domainId);
```

### Feedbacks

```javascript
await client.feedbacks.list(shopId);
await client.feedbacks.get(shopId, feedbackId);
await client.feedbacks.reply(shopId, feedbackId, replyText);
await client.feedbacks.dispute(shopId, feedbackId, reason);
```

### Groups

```javascript
await client.groups.list(shopId);
await client.groups.create(shopId, { name, visibility, products });
await client.groups.update(shopId, groupId, { name, visibility });
await client.groups.delete(shopId, groupId);
```

### Images

```javascript
await client.images.list(shopId);
await client.images.upload(shopId, imagePath);
await client.images.delete(shopId, imageId);
```

### Invoices

```javascript
await client.invoices.list(shopId, params);
await client.invoices.get(shopId, invoiceId);
await client.invoices.archive(shopId, invoiceId);
await client.invoices.unarchive(shopId, invoiceId);
await client.invoices.cancel(shopId, invoiceId);
await client.invoices.refund(shopId, invoiceId);
await client.invoices.updateDashboardNote(shopId, invoiceId, note);
await client.invoices.getPdf(shopId, invoiceId);
await client.invoices.process(shopId, invoiceId);
await client.invoices.replaceDelivered(shopId, invoiceId, invoiceItemId, replacements);
```

### Notifications

```javascript
await client.notifications.getLatest(shopId);
await client.notifications.getPage(shopId);
await client.notifications.markAsRead(shopId);
await client.notifications.getSettings(shopId);
await client.notifications.updateSettings(shopId, settings);
```

### Payment Methods

```javascript
await client.paymentMethods.list(shopId);
await client.paymentMethods.get(shopId, methodId);
await client.paymentMethods.create(shopId, data);
await client.paymentMethods.update(shopId, methodId, data);
await client.paymentMethods.delete(shopId, methodId);
await client.paymentMethods.toggle(shopId, methodId);
await client.paymentMethods.updateOrder(shopId, paymentMethods);
```

### Products

```javascript
await client.products.list(shopId, params);
await client.products.get(shopId, productId);
await client.products.create(shopId, data);
await client.products.update(shopId, productId, data);
await client.products.delete(shopId, productId);
await client.products.clone(shopId, productId);
await client.products.updateStock(shopId, productId, variantId, data);
await client.products.getDeliverables(shopId, productId, variantId);
await client.products.appendDeliverables(shopId, productId, variantId, data);
await client.products.overwriteDeliverables(shopId, productId, variantId, data);
await client.products.updateOrder(shopId, sortedIds);
```

### Shops

```javascript
await client.shops.list();
await client.shops.get(shopId);
await client.shops.create({ name, subdomain, logo });
await client.shops.update(shopId, { name, subdomain });
await client.shops.delete(shopId, name, password);
await client.shops.stats(shopId);
```

### Tickets

```javascript
await client.tickets.list(shopId, { page, statuses });
await client.tickets.get(shopId, ticketId);
await client.tickets.create(shopId, customerId, subject, invoiceId);
await client.tickets.close(shopId, ticketId);
await client.tickets.reopen(shopId, ticketId);
await client.tickets.archive(shopId, ticketId);
await client.tickets.unarchive(shopId, ticketId);
await client.tickets.sendMessage(shopId, ticketId, content);
await client.tickets.deleteMessage(shopId, ticketId, messageId);
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make changes
4. Commit: `git commit -m "Add feature"`
5. Push: `git push origin feature-name`
6. Open a Pull Request

## License

MIT License

```

Do you want me to do that?
```
