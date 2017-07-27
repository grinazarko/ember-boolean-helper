# ember-boolean-helper

This very simple component allow compare values and using boolean operator like 'and', 'or' 
and others in Handlebars templates in Ember JS application.

## Installation

* `npm install ember-boolean-helper`


## Usage

After installation you can just use following helpers in your Handlebars templates. In logical 
helpers (and, or) empty string, empty array, zero, null and undefined are false, every 
other values are true.

### and

The helper returns true if all arguments are true. 

```
{{#if (and 42 true 'item')}
  {{log 'All arguments are true!'}}
{{/if}}

```
Waits at least two arguments.

### or

The helper returns true if at least one argument is true. 

```
{{#if (or 42 null undefined '')}
  {{log 'There are true among arguments!'}}
{{/if}}

```
```
{{#unless (or 0 null undefined '')}
  {{log 'There's no true among arguments!'}}
{{/unless}}

```
Waits at least two arguments.

### eq

The helper returns true if all arguments are strictly equal. 

```
{{#if (eq 42 42 42)}
  {{log 'All arguments are equal!'}}
{{/if}}

```
```
{{#unless (eq 'foo' 'bar')}
  {{log 'Arguments aren't equal!'}}
{{/unless}}

```
Waits at least two arguments.

### gt

The helper returns true if the first argument strictly greater than the second. 

```
{{#if (gt 42 4)}
  {{log 'The first argument strictly greater than the second!'}}
{{/if}}

```

Waits strictly two arguments.

### gt-or-eq

The helper returns true if the first argument greater or equal the second. 
Waits strictly two arguments.



