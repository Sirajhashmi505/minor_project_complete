<template>
  <div>
   <div class="about-section">
        <h1>About Us </h1>
        <p>NO ACT OF KINDNESS IS EVER WASTED</p>
        <p>Give New Life To Your Old Items.</p>
        <p>A gateway for all the seniors and juniors of AMU.the students that are primarily from financially weak background will have a chance to get all those useful resources at no cost and secondly it also provide options to those seniors who have the
            resources but dont have anyone to give them the resources.</p>
   </div>
      <div class="aout-section">
        <h1>PROJECT MEMBERS.</h1>
        <p>Ahmad Siraj Hashmi</p>
        <p>Alweera Khan</p>
    </div>
       <div class="about-section">
        <p>Give New Life To Your Old Items.</p>
        <p>A Sincere Thanks to our teachers for allowing us to work on this project and also help us whenever we need them </p>
   </div>
  </div>
  

</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    onClick() {
      alert(this.name);
    }
  }
};
</script>

    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
        }
        
        html {
            box-sizing: border-box;
        }
        
        *,
        *:before,
        *:after {
            box-sizing: inherit;
        }
        
        .column {
            float: left;
            width: 33.3%;
            margin-bottom: 16px;
            padding: 0 8px;
        }
        
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            margin: 8px;
        }
        
        .about-section {
            padding: 50px;
            text-align: center;
            background-color: rgb(223, 41, 41);
            color: white;
        }
        
          .aout-section {
            padding: 50px;
            text-align: center;
            background-color: rgb(8, 8, 8);
            color: white;
        }
        
        
        .container {
            padding: 0 16px;
        }
        
        .container::after,
        .row::after {
            content: "";
            clear: both;
            display: table;
        }
        
        .title {
            color: grey;
        }
        
        .button {
            border: none;
            outline: 0;
            display: inline-block;
            padding: 8px;
            color: white;
            background-color: #000;
            text-align: center;
            cursor: pointer;
            width: 100%;
        }
        
        .button:hover {
            background-color: #555;
        }
        
        @media screen and (max-width: 650px) {
            .column {
                width: 100%;
                display: block;
            }
        }
    </style>