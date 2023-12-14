<template>
    <div>
      <h1>Check Registration Status</h1>
      <form @submit.prevent="checkStatus">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
        <button type="submit">Check Status</button>
      </form>
  
      <div v-if="status !== null">
        <h2>Registration Status:</h2>
        <p>{{ status }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const status = ref(null);
  
  const checkStatus = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/regis?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!res.ok) {
        const json = await res.json();
        alert(`Error: ${json.message}`);
      } else {
        const json = await res.json();
        status.value = json.length ? json[0].status : 'Waiting';
      }
    } catch (error) {
      console.error('Error checking registration status:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  </script>
  <style scoped>

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  div {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }

  h1 {
    color: #333;
  }

  form {
    margin-top: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #555;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  h2 {
    margin-top: 20px;
    color: #333;
  }

  p {
    color: #555;
  }
</style>
