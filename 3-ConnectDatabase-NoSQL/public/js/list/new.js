$(document).ready(function(){

  let divList = document.getElementById("divList");//Div responsável para receber os dados do usuário

  // Removendo contatos
  $('#divList').on('click','button',function(){
    document.getElementById('divList'+$(this).data('id')).remove();
  });

});

var countList = 0;

const AddItem = () => {
   divList.innerHTML =  divList.innerHTML + `
    <div class="form-row" id="divList${countList}">
      <div class="col-lg-9 col-md-9 col-sm-9">
        <input type="hidden" name="list[${countList}][name]" value="${$('#name').val()}" />
        <input type="hidden" name="list[${countList}][category]" value="${$('#category').val()}" />
        <input type="hidden" name="list[${countList}][quantity]" value="${$('#quantity').val()}" />
        <input type="hidden" name="list[${countList}][unityMeasure]" value="${$('#unityMeasure').val()}" />
        <p>${$('#name').val()}, ${$('#quantity').val()}-${$('#unityMeasure').val()}</p>
        <br>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3">
        <button class="btn btn-danger fa fa-times" data-id="${countList }" type="button"></button>
      </div>
    </div>`;
    //Limpando os campos
    $('#unityMeasure').val('');
    $('#quantity').val('');
    $('#category').val('');
    $('#name').val('');
    countList++;
}
