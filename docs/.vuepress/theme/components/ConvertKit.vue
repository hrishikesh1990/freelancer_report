<template>
<div class="hire-freelancer">
<b>Hire the <span>Top 1%</span> Freelance Developers and Designers</b>
<br><br>
<a href="https://flexiple.com/customer-form?utm_source=freelancer-report" target="_blank">
<button class='button'><span><b>GET STARTED</b></span></button>
</a>
</div>
</template>
<script>
export default {
  name: 'ConvertKit',
};
</script>

<style>
.hire-freelancer {
background:rgb(95, 101, 211); clear:left; font:24px Helvetica,Arial,sans-serif;
display:block; position:relative; text-align:center; padding:50px 0px 50px 0px;
color:white;
border-color:rgb(95, 101, 211);
border-width:2px;
border-style:solid;
border-radius:4px;
}
.button {
padding: 10px 20px 10px 20px;
border-radius:4px;
font-size: 16px;
cursor: pointer;
color: white;
background-color:rgb(86, 200, 104);
}
.button span {
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.button span:after {
  content: '\00bb';
	font-size:24px;
  position: absolute;
  opacity: 0;
  top: -7px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
