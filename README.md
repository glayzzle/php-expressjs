# php-expressjs

The project is just a skeleton for starting a new project based on ExpressJS
and based on the PHP syntax.

Here the bootstrap :

```php
<?php
$express = require('express');
$app = $express();
$app->use($express->static('dist'));

$app->get('/', function($req, $res) {
  $res->send('Hello world!');
});

$app->listen(3000, function () {
  $console->log('Example app listening on port 3000!');
});
```

# Usage

In order to run it, make sure you already installed nodejs tools :

```
npm install -g gulp
npm install -g node-debug
```

Clone this repository, and run inside it `npm install`.

To start the server run `npm run start`. If you want to debug it `npm run debug`,
and if you have modified the script, run `npm run build`.

# Contribute

Feel free to improve this skeleton with cool tools if they can integrate with the setup, pull requests are welcome ^^.

# MISC

Under MIT, special thanks to [Kornel](https://twitter.com/kornelski) for it's [babel-preset-php](https://gitlab.com/kornelski/babel-preset-php)
