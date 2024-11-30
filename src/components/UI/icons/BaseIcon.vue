<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  icon: {
    type: String as PropType<string>,
    required: true
  }
})

const SVGComponent = computed(() =>
  defineAsyncComponent({
    loader: () => import(`@/assets/icons/${props.icon}.svg`),
    onError: (error) => {
      console.error(`Failed to load icon: ${props.icon}`, error)
    }
  })
)
</script>

<template>
  <i class="w-6 h-6" v-bind="$attrs">
    <SVGComponent />
  </i>
</template>
