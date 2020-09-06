<template>
  <div>
    <table class="table table-striped">
      <thead>
        <slot name="head"></slot>
      </thead>
      <tbody>
        <slot name="body"></slot>
      </tbody>
    </table>
  </div>
</template>