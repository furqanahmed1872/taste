<script lang="ts">

  import { signinSchema } from './schema';
  import { superForm } from 'sveltekit-superforms';
  import { goto } from '$app/navigation';
  import { zodClient } from 'sveltekit-superforms/adapters';
  
  import { onMount } from 'svelte';

  export let data;

  const {
    form: formData,
    errors,
    validate,
    message,
  } = superForm(data.form, {
    validators: zodClient(signinSchema),
  });

  function validateInput(field: any) {
    validate(field);
  }

  $: if ($message) {
    if ($message.includes('successfully')) {
      onMount(() => {
        setTimeout(() => {
     
          goto('/');
        }, 2000);
      });
    } else {
      onMount(() => {
        setTimeout(() => {
          $message = null;
        }, 2000);
      });
    }
  }
  // $: console.log($formData);
</script>

<div class="relative w-full min-h-screen">
  <!-- Background Image (fixed position) -->
  <div
    class="fixed inset-0 bg-cover bg-center"
    style="background-image: url('../auth-background2.png');"
  ></div>
 
  {#if $message}
  {#if $message?.includes('successfully')}
    <h3 class="text-green-500">
      {$message}
    </h3>
  {:else}
    <h3 class="text-red-500">{$message}</h3>
  {/if}
{/if}
  
<form method="POST"
       class="w-1/3 h-screen relative mx-20 md:mx-28 lg:mx-36 2xl:mx-52 gap-2 xl:gap-8 font-poiret flex flex-col justify-center items-center"
  >
    <p class="text-5xl xl:text-7xl text-black">
      Sign <span class="text-white">In</span>
    </p>

    <!-- email -->
    <div class="flex flex-col w-full gap-2">
      <label for="email" class="text-white font-thin text-2xl xl:text-4xl"
        >E-mail</label
      >
      <input
      id="email"
      name="email"
      type="email"
      placeholder="m@example.com"
        class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
        bind:value="{$formData.email}"
            on:input="{() => validateInput('email')}"
        />
        {#if $errors.email}
        <p class="text-red-500">{$errors.email}</p>
      {/if}

    </div>
    <!-- password -->
    <div class="flex flex-col w-full gap-2">
      <label
       for="password"
        class="text-white font-thin text-2xl xl:text-4xl"
        >Password</label
      >
      <input
      id="password"
      name="password"
      type="password"
      placeholder="••••••••"
      bind:value="{$formData.password}"
      on:input="{() => validateInput('password')}"
        class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
     
        />
    </div>
    <!-- submit button -->
    <div class="flex flex-row gap-4 w-full justify-center items-center">
      <button
        type="submit"
        class="p-2 w-1/3 xl:p-3 text-white text-xl xl:text-3xl rounded-2xl bg-[#3B3D37]/65 hover:bg-[#3B3D37]/80"
        >Submit</button
      >
      <p class="text-black text-3xl xl:text-5xl">OR</p>
      <button
        type="button"
        on:click={() => goto("/signup")}
        class="p-2 w-1/3 xl:p-3 text-white text-xl xl:text-3xl rounded-2xl bg-[#3B3D37]/65 hover:bg-[#3B3D37]/80"
        >Sign Up</button
      >
    </div>
  </form>
  </div>
