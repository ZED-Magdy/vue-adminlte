<template>
    <div class="wrapper" id="app">

        <!-- Navbar -->
        <navbar></navbar>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <sidenav></sidenav>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">{{ $router.history.current.name }}</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li class="breadcrumb-item active">{{$router.history.current.name || 'Dashboard'}}</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <router-view></router-view>
                    </div>
                    <!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <controlside></controlside>
        <!-- /.control-sidebar -->
        <mainFooter></mainFooter>
        <!-- Main Footer -->
    </div>

</template>
<script>
    import navbar from './components/navbar'
    import sidenav from './components/sidenav'
    import controlside from './components/controlside'
    import mainFooter from './components/mainFooter'
    export default {
        components: {
            navbar,
            sidenav,
            controlside,
            mainFooter
        },
        mounted() {
            this.$store.dispatch('auth/init')
        },
    }
</script>
<style>
    @import '~nprogress/nprogress.css';
    @media print {
        body * {
            visibility: hidden;
        }

        .printable,
        .printable * {
            visibility: visible;
        }

        .printable {
            position: absolute;
            left: 0;
            top: 0;
        }

        .printable a {
            text-decoration: none;
            color: #000;
        }
    }
    #nprogress .bar {
        background: rgb(182, 27, 27);
        z-index: 1038;
    }

    #nprogress .spinner {
        display: none;
    }
</style>