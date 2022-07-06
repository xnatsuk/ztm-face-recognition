<script setup></script>

<template>
   <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
         <div class="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
            <div class="card-body">
               <div class="form-control">
                  <label class="label">
                     <span class="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" class="input input-bordered" />
               </div>
               <div class="form-control">
                  <label class="label">
                     <span class="label-text">Username</span>
                  </label>
                  <input type="text" placeholder="username" class="input input-bordered" />
               </div>
               <div class="form-control">
                  <label class="label">
                     <span class="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="password" class="input input-bordered" />
               </div>
               <div class="form-control mt-6">
                  <button class="btn btn-primary">Register</button>
                  <label class="label">
                     <a href="./Login.vue" class="label-text-alt link link-hover">Already a user?</a>
                  </label>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
</style>
