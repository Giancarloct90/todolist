<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List</title>

    <!-- CSS only -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">



    <!-- JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
    </script>
    <!-- FONTAWESOME CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <script defer src="index.js"></script>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <div class="cont">

        <div class="content1">
            <!-- TITLE -->
            <div class="divTitle">
                <h1>Hello</h1>
            </div>

            <!-- CONTENT -->
            <div class="divContent2">
                <!-- NEW TASK -->
                <div class="divList">
                    <h2 class="mb-3">Nueva Tarea</h2>
                    <form action="#" id="form1">
                        <input autocomplete="off" type="text" id="txtNombre" class="form-control mb-2"
                            placeholder="Nombre">
                        <input autocomplete="off" type="text" id="txtDescripcion" class="form-control mb-2"
                            placeholder="Descripcion">
                        <label id="lblNoty" class="lblNoty" for="" class="form-control mb-2"></label>
                        <button class="btn btn-dark form-control" id="btnSaved">Salvar Tarea</button>

                    </form>
                </div>
                <!-- TASKS -->
                <div class="divList1">
                    <h2>Tareas</h2>
                    <div class="divContentTask" id="divContentTask">
                        <!-- <div class="divTask">
                            <div>
                                Hacer comida
                            </div>
                            <div class="divDelete">
                                <i class="fa fa-trash" style="font-size:30px;color:red;"></i>
                            </div>
                        </div>
                        <div class="divTask">
                            <div>
                                Hacer comida
                            </div>
                            <div class="divDelete" onclick="deleteElement(this)">
                                <i id="btnDelete" class="fa fa-trash btnDelete" style="font-size:30px;color:red;"></i>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>


    </div>
</body>

</html>
