<template>
  <div
    class="flex flex-col justify-center items-center bg-gradient-to-r from-[#43C6AC] to-[#191654] min-h-screen w-full"
  >
    <form
      @submit.prevent="submitForm"
      class="lg:w-[40%] w-[80%] bg-[#FFFFFF] py-10 px-10 rounded-md flex flex-col gap-10"
    >
      <div class="text-3xl text-center font-bold">Registration Form</div>
      <div class="w-full border-b border-[#2e2e2e]">
        <input
          class="w-full border-none focus:outline-none text-lg"
          type="text"
          v-model="formData.full_name"
          placeholder="Full Name"
          required
        />
      </div>
      <div class="w-full border-b border-[#2e2e2e]">
        <input
          class="w-full border-none focus:outline-none text-lg"
          type="email"
          v-model="formData.email"
          placeholder="Email"
          required
        />
      </div>
      <div class="w-full border-b border-[#2e2e2e]">
        <input
          type="text"
          v-model="formData.asal_sekolah"
          placeholder="Asal Sekolah"
          class="w-full border-none focus:outline-none text-lg"
          required
        />
      </div>
      <button
        type="submit"
        class="w-full text-lg py-2 px-4 rounded-md bg-[#2e2e2e] text-[#f8f8f8]"
      >
        Register
      </button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = ref({
  full_name: "",
  email: "",
  asal_sekolah: "",
});

const submitForm = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/regis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: formData.value.full_name,
        email: formData.value.email,
        asal_sekolah: formData.value.asal_sekolah,
        status: "waiting",
        tanggal_pendaftaran: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      const json = await res.json();
      alert(`Registration failed: ${json.message}`);
    } else {
      alert("Registration Successful!");
      router.push("/CheckStatus");
    }
  } catch (error) {
    console.error("Error submitting registration form:", error);
    alert("An error occurred. Please try again later.");
  }
};
</script>
