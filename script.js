<script>
const calc= () => {
let amount=document.getElementById('bill_amount').value;
let perc=document.getElementById('tip_perc').value;
let tip=amount*(perc/100);
alert(tip);

let total=tip+Number(amount);
alert(total);
}
</script>