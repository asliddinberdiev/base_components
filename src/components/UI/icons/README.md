# Vue Icon Component

- **Dynamic SVG Loading**: Load any SVG icon by passing its name as a prop.
- **Error Handling**: If the specified icon is not found, an error is logged in the console.
- **Default Size**: 24x24

## Requirements

1. SVG icons in a folder = `src/assets/icons/`.
2. Tailwindcss version = `"tailwindcss": "^3.4.15"`
3. SVG loader version = `"vite-svg-loader": "^5.1.0"`

## Example

```bash
<script setup lang="ts">
import BaseIcon from '@/components/UI/icons/BaseIcon.vue'
</script>

<template>
  <BaseIcon icon="Apple" class="w-8 h-8" />
  <BaseIcon icon="Apple" class="text-gray-400 hover:text-gray-700" />
  <BaseIcon icon="Apple" />
</template>
```
