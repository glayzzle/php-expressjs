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
