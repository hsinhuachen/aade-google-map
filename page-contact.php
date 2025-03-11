<?php /** Template Name: contact */  ?>
<?php 
$check_title_now = 'contact';
get_header(); 
?>
<?php include('nav.php') ?>
<main id="contact">
    <div class="d-flex align-items-center">
        <h1 class="o-page-title"><?php the_title('') ?></h1>
        <?php include('body-braille.php')?>
    </div>
    <div class="container">
          <div class="row no-gutters top-title">
                  <div class="col-12 row no-gutters zh-project">
                        <div class="col-12 plan">
                              <?php echo get_option('zh_plan'); ?>
                        </div>
                  </div>
                <div class="col-12 row no-gutters en-project">
                      <div class="col-12 plan">
                            <?php echo get_option('en_plan'); ?>
                      </div>
                </div>
          </div>
    	  <div class="row no-gutters">
            <div id="map" class="col-12">
                  <div class="ratio ratio-21x9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1481.066722192679!2d121.53829498606149!3d25.0396016440585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd64af3e50f%3A0xb1c139066873baa1!2z6Ie654Gj55W25Luj5paH5YyW5a-m6amX5aC0IEMtTEFC!5e0!3m2!1szh-TW!2stw!4v1737684695747!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div> <!-- .ratio -->
            </div>
    	  </div>
    	  <div class="row no-gutters">
                <div class="col-md-6 row no-gutters zh-project">
                      <div class="col-12 col-sm-6 tel">
                            <div class="title">辦公室電話:</div>
                            <div class="info"><?php echo get_option('tel'); ?></div>
                      </div>
                      <div class="col-12 col-sm-6 mail">
                            <div class="title">電子信箱:</div>
                            <div class="info"><?php echo get_option('email'); ?></div>
                      </div>
                      <div class="address col-12">
                            <div class="title">地址:</div>
                            <div class="info"><?php echo get_option('address'); ?></div>
                      </div>
                </div>
    	  		<div class="col-md-6 row no-gutters en-project">
    	  			  <div class="col-sm-6 col-12 tel">
    	  			  		<div class="title">Phone:</div>
    	  			  		<div class="info"><?php echo get_option('en_tel'); ?></div>
    	  			  </div>
    	  			  <div class="col-sm-6 col-12 mail">
    	  			  		<div class="title">E-mail:</div>
    	  			  		<div class="info"><?php echo get_option('email'); ?></div>
    	  			  </div>
    	  			  <div class="address col-12">
    	  			  		<div class="title">Address:</div>
                            <div class="info"><?php echo get_option('en_address');?></div>
    	  			  </div>
    	  		</div>
    	  </div>
    </div>  
</main>
<?php 
get_footer();
?>
<style>
.ratio-21x9 {
    --bs-aspect-ratio: 42.8571428571%;
}
.ratio {
    position: relative;
    width: 100%;
}
.ratio>* {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.ratio::before {
    display: block;
    padding-top: var(--bs-aspect-ratio);
    content: "";
}
</style>