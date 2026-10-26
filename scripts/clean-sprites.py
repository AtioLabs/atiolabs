from PIL import Image
import numpy as np
from scipy import ndimage as ndi
from pathlib import Path
out=Path('public/sprites/review')
def clean(im,frame=False,index=0):
 a=np.array(im.convert('RGBA'));mask=a[:,:,3]>0
 if frame:
  labels,n=ndi.label(mask);sizes=np.bincount(labels.ravel());big=np.argmax(sizes[1:])+1
  for i in range(1,n+1):
   ys,xs=np.where(labels==i)
   if i!=big and (len(xs)<35 or index>=2 or xs.min()<30 or ys.min()>400):mask[labels==i]=False
 # Remove the one-pixel matte contour, then pale pixels touching the contour.
 mask=ndi.binary_erosion(mask,iterations=1)
 boundary=mask & ~ndi.binary_erosion(mask,iterations=1)
 rgb=a[:,:,:3].astype(int);light=(rgb.min(axis=2)>125)&((rgb.max(axis=2)-rgb.min(axis=2))<50)
 mask[boundary & light]=False
 a[:,:,3]=mask.astype('uint8')*255;a[:,:,:3][~mask]=0
 return Image.fromarray(a)
desk=clean(Image.open('/downloads/pixel-spreadsheet-desk.png'))
desk.resize((1274,1204),Image.Resampling.NEAREST).save(out/'desk-clean.png',optimize=True)
sheet=Image.open('/downloads/tea-spritesheet.png')
for i in range(4):
 frame=clean(sheet.crop((i*354,0,(i+1)*354,703)),True,i)
 frame.resize((708,1406),Image.Resampling.NEAREST).save(out/f'tea-clean-{i}.png',optimize=True)
 frame.save('/downloads/tea-clean-'+str(i)+'.png')
