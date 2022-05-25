<template>
  <LandingLayout>
    <div>
      <BlogHeader/>
      <div style="display:flex;border: 1px solid blue; width: 100%;">
        <div style="width: 100%;">
          <slot></slot>
        </div>
        <div>
          <BlogAside/>
        </div>
      </div>
    </div>
  </LandingLayout>
</template>
